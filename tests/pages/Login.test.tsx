import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Login from '../../src/pages/Login';

// Mock the assets and components for testing purposes
vi.mock('../../src/assets/images/login-image.webp', () => ({
  default: 'mocked-login-image',
}));

vi.mock('../../src/assets/icons/logo-large.svg', () => ({
  default: 'mocked-logo',
}));
vi.mock('../../src/components/LoginForm', () => ({
  default: () => <div>Login Form</div>,
}));

describe('Login', () => {
  it('renders the login page correctly', () => {
    render(<Login />);

    // Check if the logo image is rendered
    const logos = screen.getAllByAltText('Lendsqr logo');
    expect(logos).toHaveLength(2); // Check that there are two logos
    expect(logos[0]).toHaveClass('login__left__logo'); // Assert the first logo
    expect(logos[1]).toHaveClass('login__right__logo'); // Assert the second logo

    // Check if the login image is rendered
    const loginImage = screen.getByAltText('login image');
    expect(loginImage).toBeInTheDocument();

    // Check if the "Welcome!" text is present
    const welcomeText = screen.getByText('Welcome!');
    expect(welcomeText).toBeInTheDocument();

    // Check if the "Enter details to login." text is present
    const loginText = screen.getByText('Enter details to login.');
    expect(loginText).toBeInTheDocument();

    // Check if LoginForm is rendered
    const loginForm = screen.getByText('Login Form');
    expect(loginForm).toBeInTheDocument();
  });
});
