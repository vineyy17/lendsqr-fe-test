import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import UserDetailsOverview from '../../src/components/UserDetailsOverview';
import toast from 'react-hot-toast';

// Mocking react-hot-toast
vi.mock('react-hot-toast');

// Sample user data
const mockUserInfo = {
  fullName: 'John Doe',
  id: '12345',
  balance: '$1000',
  accountNumber: '00123456789',
  bankName: 'Bank of Testing',
};

describe('UserDetailsOverview', () => {
  it('renders user details correctly', () => {
    render(<UserDetailsOverview info={mockUserInfo} />);

    // Check if the user name and ID are rendered correctly
    expect(screen.getByText(mockUserInfo.fullName)).toBeInTheDocument();
    expect(screen.getByText(mockUserInfo.id)).toBeInTheDocument();

    // Check if the user balance and account details are displayed
    expect(screen.getByText(mockUserInfo.balance)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockUserInfo.accountNumber}/${mockUserInfo.bankName}`,
      ),
    ).toBeInTheDocument();
  });

  it('triggers toast when clicking on "Blacklist User" button', async () => {
    render(<UserDetailsOverview info={mockUserInfo} />);

    // Find the Blacklist User button
    const blacklistButton = screen.getByText('Blacklist User');

    // Simulate a click on the button
    fireEvent.click(blacklistButton);

    // Ensure toast.success was called
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        'User successfully blacklisted',
      );
    });
  });

  it('triggers toast when clicking on "Activate User" button', async () => {
    render(<UserDetailsOverview info={mockUserInfo} />);

    // Find the Activate User button
    const activateButton = screen.getByText('Activate User');

    // Simulate a click on the button
    fireEvent.click(activateButton);

    // Ensure toast.success was called
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('User successfully activated');
    });
  });

  it('renders the "General Details" tab as active by default', () => {
    render(<UserDetailsOverview info={mockUserInfo} />);

    // Check if the "General Details" tab has the 'active' class
    const generalDetailsTab = screen.getByText('General Details').parentElement;
    expect(generalDetailsTab).toHaveClass('active');
  });

  it('renders other tabs correctly', () => {
    render(<UserDetailsOverview info={mockUserInfo} />);

    // Check that all tab texts are rendered correctly
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByText('Bank Details')).toBeInTheDocument();
    expect(screen.getByText('Loans')).toBeInTheDocument();
    expect(screen.getByText('Savings')).toBeInTheDocument();
    expect(screen.getByText('App and System')).toBeInTheDocument();
  });
});
