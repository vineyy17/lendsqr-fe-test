import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../../src/components/Header';
import { useUsers } from '../../src/hooks/useUsers';
import { useFilterStore } from '../../src/store/filterStore';

// Mock the hooks
vi.mock('../../src/hooks/useUsers', () => ({
  useUsers: vi.fn(),
}));

vi.mock('../../src/store/filterStore', () => ({
  useFilterStore: vi.fn(),
}));

// Mock images to prevent import errors
vi.mock('../../assets/icons/logo-small.svg', () => ({
  default: 'logo-url',
}));
vi.mock('../../assets/icons/search.svg', () => ({
  default: 'search-url',
}));
vi.mock('../../assets/images/notification.jpg', () => ({
  default: 'notification-url',
}));
vi.mock('../../assets/images/avatar.png', () => ({
  default: 'avatar-url',
}));
vi.mock('../../assets/icons/dropdown.svg', () => ({
  default: 'dropdown-url',
}));

describe('Header Component', () => {
  const mockToggleSidebar = vi.fn();
  const mockSetFilteredUsers = vi.fn();

  const mockUsers = [
    {
      id: 1,
      organization: 'TestOrg',
      firstName: 'John',
      surname: 'Doe',
      username: 'johndoe',
      email: 'john@test.com',
      phone: '1234567890',
      dateJoined: '2024-01-01',
      status: 'active',
      user: {
        personalInfo: {} as any,
        educationEmployment: {} as any,
        socials: {} as any,
        guarantor: {} as any,
      },
    },
    {
      id: 2,
      organization: 'AnotherOrg',
      firstName: 'Jane',
      surname: 'Smith',
      username: 'janesmith',
      email: 'jane@test.com',
      phone: '0987654321',
      dateJoined: '2024-01-02',
      status: 'inactive',
      user: {
        personalInfo: {} as any,
        educationEmployment: {} as any,
        socials: {} as any,
        guarantor: {} as any,
      },
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock the useUsers hook
    (useUsers as any).mockReturnValue({
      users: mockUsers,
      isLoading: false,
      error: null,
    });

    // Mock the useFilterStore hook
    (useFilterStore as any).mockReturnValue({
      setFilteredUsers: mockSetFilteredUsers,
    });
  });

  it('renders correctly with all elements', () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    // Check if all main elements are present
    expect(
      screen.getByPlaceholderText('Search for anything'),
    ).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByAltText('search icon')).toBeInTheDocument();
    expect(screen.getByAltText('notification icon')).toBeInTheDocument();
    expect(screen.getByAltText('profile picture')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByText('Adedeji')).toBeInTheDocument();
  });

  it('calls toggleSidebar when hamburger menu is clicked', async () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    // Find by SVG title or class name
    const hamburger = screen.getByTestId('hamburger-menu');
    await userEvent.click(hamburger);

    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });

  it('filters users by username when searching', async () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    const searchInput = screen.getByPlaceholderText('Search for anything');
    await userEvent.type(searchInput, 'john');

    expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
  });

  it('filters users by email when searching', async () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    const searchInput = screen.getByPlaceholderText('Search for anything');
    await userEvent.type(searchInput, 'jane@test');

    expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[1]]);
  });

  it('filters users by organization when searching', async () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    const searchInput = screen.getByPlaceholderText('Search for anything');
    await userEvent.type(searchInput, 'testorg');

    expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
  });

  it('filters users by phone number when searching', async () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    const searchInput = screen.getByPlaceholderText('Search for anything');
    await userEvent.type(searchInput, '1234567890');

    expect(mockSetFilteredUsers).toHaveBeenCalledWith([mockUsers[0]]);
  });

  it('resets filtered users when search input is cleared', async () => {
    render(<Header toggleSidebar={mockToggleSidebar} />);

    const searchInput = screen.getByPlaceholderText('Search for anything');
    await userEvent.type(searchInput, 'john');
    await userEvent.clear(searchInput);

    expect(mockSetFilteredUsers).toHaveBeenLastCalledWith(mockUsers);
  });

  it('handles empty users array gracefully', () => {
    (useUsers as any).mockReturnValue({
      users: null,
      isLoading: false,
      error: null,
    });

    render(<Header toggleSidebar={mockToggleSidebar} />);

    const searchInput = screen.getByPlaceholderText('Search for anything');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(mockSetFilteredUsers).toHaveBeenCalledWith([]);
  });
});
