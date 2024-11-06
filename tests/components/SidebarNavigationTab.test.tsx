import { render, screen } from '@testing-library/react';
import SidebarNavigationTab from '../../src/components/SidebarNavigationTab';

describe('SidebarNavigationTab', () => {
  it('renders the name and icon correctly', () => {
    const mockIcon = 'path/to/icon.png';
    const mockName = 'Users';
    const mockAltText = 'Users Icon';
    const iconHeight = 24;
    const iconWidth = 24;

    render(
      <SidebarNavigationTab
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        iconAltText={mockAltText}
        icon={mockIcon}
        name={mockName}
      />,
    );

    // Check if the name is rendered
    expect(screen.getByText(mockName)).toBeInTheDocument();

    // Check if the icon has the correct src and alt text
    const icon = screen.getByAltText(mockAltText);
    expect(icon).toHaveAttribute('src', mockIcon);
    expect(icon).toHaveAttribute('alt', mockAltText);

    // Check if the icon has the correct size based on props
    expect(icon).toHaveStyle({
      width: '1.5rem', // 24px / 16 = 1.5rem
      height: '1.5rem', // 24px / 16 = 1.5rem
    });
  });

  it('does not apply the active class when the name is not "Users"', () => {
    const mockIcon = 'path/to/icon.png';
    const mockAltText = 'Users Icon';
    const iconHeight = 24;
    const iconWidth = 24;

    render(
      <SidebarNavigationTab
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        iconAltText={mockAltText}
        icon={mockIcon}
        name="Settings"
      />,
    );

    // Check if the active class is NOT applied to the sidebarNav, icon, and text
    const sidebarNav = screen.getByText('Settings').parentElement;
    expect(sidebarNav).not.toHaveClass('sidebarNav--active');

    const icon = screen.getByAltText(mockAltText);
    expect(icon).not.toHaveClass('sidebarNav__wrapper__icon--active');

    const text = screen.getByText('Settings');
    expect(text).not.toHaveClass('sidebarNav__wrapper__text--active');
  });

  it('converts px to rem correctly using the pxToRem function', () => {
    const mockIcon = 'path/to/icon.png';
    const mockAltText = 'Users Icon';
    const iconHeight = 32;
    const iconWidth = 32;

    render(
      <SidebarNavigationTab
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        iconAltText={mockAltText}
        icon={mockIcon}
        name="Users"
      />,
    );

    // Check if the icon has the correct size based on pxToRem conversion
    const icon = screen.getByAltText(mockAltText);
    expect(icon).toHaveStyle({
      width: '2rem', // 32px / 16 = 2rem
      height: '2rem', // 32px / 16 = 2rem
    });
  });
});
