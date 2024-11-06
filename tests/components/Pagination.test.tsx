import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from '../../src/components/Pagination';

const renderPagination = (props: any) => {
  return render(
    <MemoryRouter>
      <Pagination {...props} />
    </MemoryRouter>,
  );
};

describe('Pagination', () => {
  const defaultProps = {
    totalItems: 100,
    itemsPerPage: 10,
    onPageChange: vi.fn(),
    onItemsPerPageChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with initial props', () => {
    renderPagination(defaultProps);

    // Check if basic elements are present
    expect(screen.getByText('Showing')).toBeInTheDocument();
    expect(screen.getByText('out of 100')).toBeInTheDocument();

    // Check if items per page select is present with correct value
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('10');

    // Check if navigation buttons are present
    const [prevButton, nextButton] = screen.getAllByRole('button');
    expect(prevButton).toBeDisabled(); // First page, prev should be disabled
    expect(nextButton).not.toBeDisabled();
  });

  it('handles page navigation correctly', () => {
    renderPagination(defaultProps);

    const [_, nextButton] = screen.getAllByRole('button');

    // Click next button
    fireEvent.click(nextButton);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);

    // Can't test prev button directly due to URL params handling
    // Would need to setup with specific initial URL params
  });

  it('handles items per page change', () => {
    renderPagination(defaultProps);

    const select = screen.getByRole('combobox');

    // Change items per page to 20
    fireEvent.change(select, { target: { value: '20' } });

    expect(defaultProps.onItemsPerPageChange).toHaveBeenCalledWith(20);
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(1); // Should reset to page 1
  });

  it('renders correct number of page numbers for small total', () => {
    renderPagination({
      ...defaultProps,
      totalItems: 30, // Should show 3 pages with 10 items per page
    });

    // Should show all page numbers without ellipsis
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.queryByText('...')).not.toBeInTheDocument();
  });

  it('disables next button on last page', () => {
    renderPagination({
      ...defaultProps,
      totalItems: 20,
      itemsPerPage: 10,
    });

    const [, nextButton] = screen.getAllByRole('button');
    fireEvent.click(nextButton); // Go to page 2

    // After navigation, next button should be disabled
    expect(nextButton).toBeDisabled();
  });
});
