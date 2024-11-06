import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../../src/components/LoginForm';
import toast from 'react-hot-toast';
import { vi } from 'vitest';
import AllProviders from '../AllProviders';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui, { wrapper: AllProviders });
};

describe('LoginForm', () => {
  test('renders LoginForm with email, password fields, and submit button', () => {
    renderWithProviders(<LoginForm />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  test('shows validation error messages for invalid input', async () => {
    renderWithProviders(<LoginForm />);

    fireEvent.click(screen.getByRole('button', { name: /log in/i }));

    expect(
      await screen.findByText(/invalid email address/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/password must be at least 8 characters/i),
    ).toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    renderWithProviders(<LoginForm />);

    const passwordInput = screen.getByPlaceholderText(/password/i);
    const toggleButton = screen.getByText(/show/i);

    expect(passwordInput).toHaveAttribute('type', 'password');
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('displays toast notification on "Forgot Password" click', () => {
    const toastMock = vi.fn();
    vi.spyOn(toast, 'success').mockImplementation(toastMock);

    renderWithProviders(<LoginForm />);

    fireEvent.click(screen.getByText(/forgot password/i));

    expect(toastMock).toHaveBeenCalledWith(
      'A reset password link has been successfully sent to your provided email address',
    );
  });

  test('disables form fields during loading state', async () => {
    renderWithProviders(<LoginForm />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByRole('button', { name: /log in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput).toBeDisabled();
      expect(passwordInput).toBeDisabled();
      expect(submitButton).toBeDisabled();
    });
  });
});
