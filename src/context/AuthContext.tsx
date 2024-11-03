import { createContext, useContext, useReducer, ReactNode } from 'react';
import toast from 'react-hot-toast';

// Define types for User, State, and Action
interface User {
  email: string;
  password: string;
}

interface State {
  user: User | null;
  isAuthenticated: boolean;
}

type Action = { type: 'login'; payload: User } | { type: 'logout' };

// Define the AuthContext type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Initial state
const initialState: State = {
  user: null,
  isAuthenticated: false,
};

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error('Unknown action');
  }
}

// Fake user for demonstration
const FAKE_USER: User = {
  email: 'lendsqr@outlook.com',
  password: 'lendsqr123',
};

// Create the AuthContext with a default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    } else {
      toast.error(
        "Incorrect login details. Kindly check the GitHub repository's README or project doc for the correct login details.",
      );
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('AuthContext was used outside AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
