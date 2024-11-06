import { render, screen } from '@testing-library/react';
import UsersStatsCard from '../../src/components/UsersStatsCard';

describe('UsersStatsCard', () => {
  it('renders the card with the correct name, icon, and stat', () => {
    const mockIcon = 'path/to/icon.png';
    const mockStat = 1500;

    render(<UsersStatsCard name="Users" icon={mockIcon} stat={mockStat} />);

    // Check if the name is rendered correctly
    expect(screen.getByText('Users')).toBeInTheDocument();

    // Check if the icon is rendered with the correct src
    const icon = screen.getByAltText('');
    expect(icon).toHaveAttribute('src', mockIcon);

    // Check if the stat is formatted correctly
    expect(screen.getByText('1,500')).toBeInTheDocument(); // Expect formatted number
  });

  it('displays 0 when stat is undefined', () => {
    const mockIcon = 'path/to/icon.png';

    render(
      <UsersStatsCard name="Active Users" icon={mockIcon} stat={undefined} />,
    );

    // Check if stat is displayed as '0' when it's undefined
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('formats large numbers correctly', () => {
    const mockIcon = 'path/to/icon.png';
    const mockStat = 1000000; // A large number

    render(
      <UsersStatsCard
        name="Users With Savings"
        icon={mockIcon}
        stat={mockStat}
      />,
    );

    // Check if large number is formatted correctly
    expect(screen.getByText('1,000,000')).toBeInTheDocument();
  });
});
