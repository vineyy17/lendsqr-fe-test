import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UserDetails from '../../src/pages/UserDetails';
import { useGoBack } from '../../src/hooks/useGoBack';
import { useLocalStorage } from '../../src/hooks/useLocalStorage';

// Mock the hooks and components
vi.mock('../../src/hooks/useGoBack', () => ({
  useGoBack: vi.fn(),
}));

vi.mock('../../src/hooks/useLocalStorage', () => ({
  useLocalStorage: vi.fn(),
}));

// Mock SVG import
vi.mock('../../src/assets/icons/back-arrow.svg', () => ({
  default: 'back-arrow.svg',
}));

describe('UserDetails', () => {
  const mockGoBack = vi.fn();
  const mockUser = {
    accountInfo: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
    },
    educationEmployment: {
      level: 'Bachelor',
      employer: 'Tech Corp',
    },
    socials: {
      twitter: '@johndoe',
      facebook: 'johndoe',
    },
    guarantor: {
      name: 'Jane Smith',
      relationship: 'Sister',
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useGoBack as any).mockReturnValue(mockGoBack);
    (useLocalStorage as any).mockReturnValue([mockUser, vi.fn()]);
  });

  it('renders all user information sections', () => {
    render(<UserDetails />);

    expect(screen.getByTestId('user-details-overview')).toBeInTheDocument();
    expect(screen.getByTestId('personal-information')).toBeInTheDocument();
    expect(screen.getByTestId('education-information')).toBeInTheDocument();
    expect(screen.getByTestId('socials-information')).toBeInTheDocument();
    expect(screen.getByTestId('guarantor-information')).toBeInTheDocument();
  });

  it('displays the back button with correct text', () => {
    render(<UserDetails />);

    const backArrow = screen.getByAltText('left arrow icon');
    const backText = screen.getByText('Back to Users');

    expect(backArrow).toBeInTheDocument();
    expect(backText).toBeInTheDocument();
  });

  it('calls goBack function when back arrow is clicked', () => {
    render(<UserDetails />);

    const backArrow = screen.getByAltText('left arrow icon');
    fireEvent.click(backArrow);

    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it('handles empty user data gracefully', () => {
    (useLocalStorage as any).mockReturnValue([
      {
        accountInfo: {},
        personalInfo: {},
        educationEmployment: {},
        socials: {},
        guarantor: {},
      },
      vi.fn(),
    ]);

    render(<UserDetails />);

    // Verify that the component renders without crashing
    expect(screen.getByTestId('user-details-overview')).toBeInTheDocument();
    expect(screen.getByTestId('personal-information')).toBeInTheDocument();
    expect(screen.getByTestId('education-information')).toBeInTheDocument();
    expect(screen.getByTestId('socials-information')).toBeInTheDocument();
    expect(screen.getByTestId('guarantor-information')).toBeInTheDocument();
  });
});
