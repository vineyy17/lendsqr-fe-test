import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterUsers from '../../src/components/FilterUsers';
import { useUsers } from '../../src/hooks/useUsers';
import { useFilterStore } from '../../src/store/filterStore';
import { User } from '../../src/types/userTypes';

// Mock the hooks and dependencies
vi.mock('../../src/hooks/useUsers');
vi.mock('../../src/store/filterStore');
vi.mock('@radix-ui/themes', () => ({
  Popover: {
    Root: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Trigger: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Content: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  },
}));

// Mock sample data
const mockUsers: User[] = [
  {
    id: 1,
    organization: 'Organization1',
    firstName: 'John',
    surname: 'Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    user: {
      personalInfo: {
        fullName: 'John Doe',
        phoneNumber: '123-456-7890',
        email: 'john.doe@example.com',
        bvn: '1234567890',
        gender: 'Male',
        maritalStatus: 'Single',
        children: 'None',
        typeOfResidence: 'Apartment',
      },
      educationEmployment: {
        levelOfEducation: "Bachelor's",
        employmentStatus: 'Employed',
        sectorOfEmployment: 'Tech',
        durationOfEmployment: '2 years',
        officeEmail: 'john.doe@company.com',
        monthlyIncome: '5000',
        loanRepayment: 'No',
      },
      socials: {
        twitter: '@johndoe',
        facebook: 'facebook.com/johndoe',
        instagram: 'instagram.com/johndoe',
      },
      guarantor: {
        fullName: 'Jane Doe',
        phoneNumber: '098-765-4321',
        email: 'jane.doe@example.com',
        relationship: 'Spouse',
      },
    },
    dateJoined: '2024-01-01',
    status: 'active',
  },
];

describe('FilterUsers', () => {
  const mockSetFilteredUsers = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useUsers as any).mockReturnValue({
      users: mockUsers,
      isLoading: false,
      error: null,
    });
    (useFilterStore as any).mockReturnValue({
      setFilteredUsers: mockSetFilteredUsers,
    });
  });

  it('renders the filter button and form', () => {
    render(<FilterUsers />);
    expect(screen.getByAltText('filter')).toBeInTheDocument();
  });

  it('filters users by organization', async () => {
    render(<FilterUsers />);

    // Open the filter form
    fireEvent.click(screen.getByAltText('filter'));

    // Select organization
    const orgSelect = screen.getByTestId('filter-select-organization');
    fireEvent.change(orgSelect, { target: { value: 'Organization1' } });

    // Submit the form
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
    });
  });

  it('filters users by username', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));

    const usernameInput = screen.getByLabelText('Username');
    await userEvent.type(usernameInput, 'johndoe');

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
    });
  });

  it('filters users by email', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));

    const emailInput = screen.getByLabelText('Email');
    await userEvent.type(emailInput, 'john.doe@example.com');

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
    });
  });

  it('filters users by status', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));

    const statusSelect = screen.getByTestId('filter-select-status');
    fireEvent.change(statusSelect, { target: { value: 'active' } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
    });
  });

  it('resets filters when reset button is clicked', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));

    // Add some filters first
    const usernameInput = screen.getByLabelText('Username');
    await userEvent.type(usernameInput, 'johndoe');

    // Click reset button
    fireEvent.click(screen.getByRole('reset'));

    await waitFor(() => {
      expect(mockSetFilteredUsers).toHaveBeenCalledWith(mockUsers);
    });
  });

  it('returns all users when no filters are applied', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));
    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockSetFilteredUsers).toHaveBeenCalledWith(mockUsers);
    });
  });

  it('handles date filtering', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));

    // Click the date input to open the date picker
    const dateInput = screen.getByPlaceholderText('Date');
    fireEvent.click(dateInput);

    // Select a date (this will depend on your DatePicker implementation)
    const dateToSelect = new Date('2024-01-01');
    fireEvent.change(dateInput, { target: { value: dateToSelect } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
    });
  });

  it('handles form validation errors', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));

    // Enter invalid email
    const emailInput = screen.getByLabelText('Email');
    await userEvent.type(emailInput, 'invalid-email');

    fireEvent.submit(screen.getByRole('form'));

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });
  });

  it('handles phone number validation', async () => {
    render(<FilterUsers />);

    fireEvent.click(screen.getByAltText('filter'));

    // Enter invalid phone number
    const phoneInput = screen.getByLabelText('Phone Number');
    await userEvent.type(phoneInput, 'abc');

    fireEvent.submit(screen.getByRole('form'));

    // Check for error message
    await waitFor(() => {
      expect(
        screen.getByText(/Insert a valid phone number/i),
      ).toBeInTheDocument();
    });
  });
});
