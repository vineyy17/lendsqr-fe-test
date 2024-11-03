import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import PageNotFound from './pages/PageNotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 1,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <Theme>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="users" />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:userId" element={<UserDetails />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '0.5rem' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
              style: {
                fontSize: '1rem',
                maxWidth: '31.25rem',
                padding: '1rem 1.5rem',
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-blue)',
                animation: 'fade-in 0.5s',
                borderRadius: '0.4rem',
              },
            }}
          />
        </QueryClientProvider>
      </Theme>
    </AuthProvider>
  );
}

export default App;
