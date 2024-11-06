// utils.tsx
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { AuthContext } from '../src/context/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Helper function for navigating to a route in tests
export const navigateTo = (path: string) => {
  return render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={path} replace />} />
      </Routes>
    </BrowserRouter>,
  );
};

export const mockAuthState = (
  isAuthenticated: boolean,
  user: { email: string; password: string } | null = null,
  children: ReactNode,
) => {
  const mockLogin = vi.fn(); // Mocked login function

  // Define the provider component
  const MockProvider = ({ children }: { children: ReactNode }) => {
    // Mock context value based on the provided isAuthenticated and user
    const mockValue = {
      user,
      isAuthenticated,
      login: mockLogin, // Use the mockLogin function
      logout: vi.fn(), // Mocked logout function
    };

    return (
      <AuthContext.Provider value={mockValue}>{children}</AuthContext.Provider>
    );
  };

  // Render the children within the MockProvider
  render(<MockProvider>{children}</MockProvider>);

  return mockLogin; // Return mockLogin so it can be accessed in the test
};
