import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from '../../src/components/Sidebar';
import { sidebarConfig } from '../../src/data/sidebarTabs';

describe('Sidebar Component', () => {
  const closeSidebarMock = vi.fn();

  const renderSidebar = (isSidebarOpen = false) =>
    render(
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebarMock} />,
    );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders Sidebar component', () => {
    render(<Sidebar isSidebarOpen={true} closeSidebar={() => {}} />);

    // Check if the Sidebar is in the document
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('sidebar has open class when `isSidebarOpen` is true', () => {
    renderSidebar(true);
    expect(screen.getByRole('navigation')).toHaveClass('sidebar--open');
  });

  test('sidebar does not have open class when `isSidebarOpen` is false', () => {
    renderSidebar(false);
    expect(screen.getByRole('navigation')).not.toHaveClass('sidebar--open');
  });

  test('clicking close button calls `closeSidebar` function', async () => {
    renderSidebar(true);
    const closeButton = screen.getByRole('button', { name: /close sidebar/i });
    await userEvent.click(closeButton);
    expect(closeSidebarMock).toHaveBeenCalledTimes(1);
  });

  test('renders logo image', () => {
    renderSidebar(true);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders SidebarNavigationTab components correctly based on `sidebarConfig`', () => {
    renderSidebar(true);
    // Check first navigation tab
    const firstTab = sidebarConfig[0].items[0];
    expect(screen.getByText(firstTab.name)).toBeInTheDocument();

    // Check additional sections and items
    sidebarConfig.slice(1).forEach(({ section, items }) => {
      expect(screen.getByText(section)).toBeInTheDocument();
      items.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
});
