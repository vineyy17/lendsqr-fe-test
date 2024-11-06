import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import AppLayout from '../../src/pages/AppLayout';
import { MemoryRouter } from 'react-router-dom'; // To wrap with MemoryRouter for routing context

// Mock the Header component
vi.mock('../../src/components/Header', () => ({
  __esModule: true,
  default: ({ toggleSidebar }: { toggleSidebar: () => void }) => (
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
  ),
}));

// Mock Sidebar with correct types
vi.mock('../../src/components/Sidebar', () => ({
  __esModule: true,
  default: ({
    isSidebarOpen,
    closeSidebar,
  }: {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
  }) => (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}>
      <button onClick={closeSidebar}>Close Sidebar</button>
    </div>
  ),
}));

describe('AppLayout', () => {
  it('renders the layout with the correct structure', () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>,
    );

    // Check if the Header, Sidebar, and Outlet are rendered
    expect(
      screen.getByRole('button', { name: /toggle sidebar/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('applies the correct CSS class for an open sidebar', async () => {
    const { container } = render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>,
    );

    // Initially, the sidebar should be closed, so the class should not include 'appLayout--sideOpen'
    expect(container.firstChild).not.toHaveClass('appLayout--sideOpen');

    // Open the sidebar
    fireEvent.click(screen.getByRole('button', { name: /toggle sidebar/i }));

    // Now the class should include 'appLayout--sideOpen'
    expect(container.firstChild).toHaveClass('appLayout--sideOpen');
  });

  it('renders the Outlet component inside the main container', () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>,
    );

    // Check if the main container is rendered
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeInTheDocument();
  });
});
