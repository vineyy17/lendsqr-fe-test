// AllProviders.tsx

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { AuthProvider } from '../src/context/AuthContext';
import { Toaster } from 'react-hot-toast';

// Configure a new QueryClient instance
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 1,
    },
  },
});

const AllProviders = ({ children }: PropsWithChildren) => (
  <AuthProvider>
    <Theme>
      <QueryClientProvider client={client}>
        <BrowserRouter>{children}</BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '0.5rem' }}
          toastOptions={{
            success: { duration: 2500 },
            error: { duration: 3000 },
            style: {
              fontSize: '1rem',
              maxWidth: '31.25rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-blue)',
              borderRadius: '0.4rem',
            },
          }}
        />
      </QueryClientProvider>
    </Theme>
  </AuthProvider>
);

export default AllProviders;
