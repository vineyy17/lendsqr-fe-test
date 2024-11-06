import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import UsersTable from '../../src/components/UsersTable';
import { useUsers } from '../../src/hooks/useUsers';
import { useFilterStore } from '../../src/store/filterStore';
import { MemoryRouter } from 'react-router-dom';
import type { User } from '../../src/types/userTypes';

// Mock the hooks
vi.mock('../../src/hooks/useUsers');
vi.mock('../../src/store/filterStore');

// Mock data
const mockUsers: User[] = [
  {
    id: 1,
    organization: 'Test Org',
    firstName: 'John',
    surname: 'Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '1234567890',
    dateJoined: '2024-01-01',
    status: 'active',
    user: {
      personalInfo: {
        fullName: 'John Doe',
        phoneNumber: '1234567890',
        email: 'john@example.com',
        bvn: '12345',
        gender: 'Male',
        maritalStatus: 'Single',
        children: 'None',
        typeOfResidence: 'Apartment',
      },
      educationEmployment: {
        levelOfEducation: "Bachelor's",
        employmentStatus: 'Employed',
        sectorOfEmployment: 'Technology',
        durationOfEmployment: '2 years',
        officeEmail: 'john@work.com',
        monthlyIncome: '$5000',
        loanRepayment: '$500',
      },
      socials: {
        twitter: '@john',
        facebook: 'john.doe',
        instagram: '@johndoe',
      },
      guarantor: {
        fullName: 'Jane Doe',
        phoneNumber: '0987654321',
        email: 'jane@example.com',
        relationship: 'Sister',
      },
    },
  },
];

// Wrapper component for router context
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

describe('UsersTable', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays skeleton loading when data is being fetched', () => {
    vi.mocked(useUsers).mockReturnValue({
      isLoading: true,
      users: [],
      error: null,
    });

    vi.mocked(useFilterStore).mockReturnValue({
      filteredUsers: null,
      setFilteredUsers: vi.fn(),
      resetFilters: vi.fn(),
    });

    render(<UsersTable />, { wrapper });
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('displays error message when there is an error fetching users', () => {
    vi.mocked(useUsers).mockReturnValue({
      isLoading: false,
      users: [],
      error: new Error('Error fetching users'),
    });

    vi.mocked(useFilterStore).mockReturnValue({
      filteredUsers: null,
      setFilteredUsers: vi.fn(),
      resetFilters: vi.fn(),
    });

    render(<UsersTable />, { wrapper });
    expect(
      screen.getByText(/An error occured while fetching/i),
    ).toBeInTheDocument();
  });

  it('displays no results when filtered users are empty', () => {
    vi.mocked(useUsers).mockReturnValue({
      isLoading: false,
      users: mockUsers,
      error: null,
    });

    vi.mocked(useFilterStore).mockReturnValue({
      filteredUsers: [],
      setFilteredUsers: vi.fn(),
      resetFilters: vi.fn(),
    });

    render(<UsersTable />, { wrapper });
    expect(
      screen.getByText(/No user matches the filter criteria/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Display all users/i }),
    ).toBeInTheDocument();
  });

  it('displays users when data is available', () => {
    vi.mocked(useUsers).mockReturnValue({
      isLoading: false,
      users: mockUsers,
      error: null,
    });

    vi.mocked(useFilterStore).mockReturnValue({
      filteredUsers: null,
      setFilteredUsers: vi.fn(),
      resetFilters: vi.fn(),
    });

    render(<UsersTable />, { wrapper });
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});
