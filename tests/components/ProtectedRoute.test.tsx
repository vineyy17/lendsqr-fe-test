import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/context/AuthContext';
import ProtectedRoute from '../../src/components/ProtectedRoute';

// Mock react-router-dom's useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ProtectedRoute', () => {
  // Reset mocks before each test
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  // Helper function to render ProtectedRoute with custom auth state
  const renderProtectedRoute = (isAuthenticated: boolean) => {
    const mockAuthContext = {
      user: isAuthenticated
        ? { email: 'test@example.com', password: 'password' }
        : null,
      isAuthenticated,
      login: vi.fn(),
      logout: vi.fn(),
    };

    return render(
      <MemoryRouter>
        <AuthContext.Provider value={mockAuthContext}>
          <ProtectedRoute>
            <div data-testid="protected-content">Protected Content</div>
          </ProtectedRoute>
        </AuthContext.Provider>
      </MemoryRouter>,
    );
  };

  test('renders children when user is authenticated', () => {
    renderProtectedRoute(true);

    expect(screen.getByTestId('protected-content')).toBeDefined();
    expect(screen.getByText('Protected Content')).toBeDefined();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('redirects to login page when user is not authenticated', async () => {
    renderProtectedRoute(false);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
    expect(screen.queryByTestId('protected-content')).toBeNull();
  });

  test('does not render children when user is not authenticated', () => {
    renderProtectedRoute(false);

    expect(screen.queryByTestId('protected-content')).toBeNull();
    expect(screen.queryByText('Protected Content')).toBeNull();
  });

  test('redirects to login page only once when unauthenticated', async () => {
    renderProtectedRoute(false);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  test('handles authentication state changes', async () => {
    const { rerender } = renderProtectedRoute(false);

    // Initial state - not authenticated
    expect(screen.queryByTestId('protected-content')).toBeNull();
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });

    // Rerender with authenticated state
    const mockAuthContext = {
      user: { email: 'test@example.com', password: 'password' },
      isAuthenticated: true,
      login: vi.fn(),
      logout: vi.fn(),
    };

    rerender(
      <MemoryRouter>
        <AuthContext.Provider value={mockAuthContext}>
          <ProtectedRoute>
            <div data-testid="protected-content">Protected Content</div>
          </ProtectedRoute>
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByTestId('protected-content')).toBeDefined();
  });
});
