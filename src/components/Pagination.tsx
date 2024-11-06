import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/components/Pagination.scss';
import arrowDrop from '../assets/icons/paginationDropdown.svg';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const items = Number(e.target.value);
    onItemsPerPageChange(items);
    handlePageChange(1); // Reset to page 1 on itemsPerPage change
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage > 3) {
        pageNumbers.push(1, '...');
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 2) {
        pageNumbers.push('...', totalPages);
      }
    }

    return pageNumbers.map((page, index) => (
      <span
        data-testid="pageNumber"
        key={index}
        className={`pagination__controls__text ${
          currentPage === page ? 'active' : ''
        }`}
      >
        {page}
      </span>
    ));
  };

  return (
    <div className="pagination">
      <div className="pagination__info">
        <span className="pagination__info__text">Showing</span>
        <div className="pagination__info__selectWrapper">
          <select
            className="pagination__info__selectWrapper__select"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <img
            src={arrowDrop}
            alt="arrow icon"
            className="pagination__info__selectWrapper__icon"
          />
        </div>
        <span className="pagination__info__text">out of {totalItems}</span>
      </div>
      <div className="pagination__controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination__controls__button"
          role="button"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0061 11.0573C10.8472 11.8984 9.54344 13.1595 8.745 12.3184L3.99424 7.56759C3.61581 7.23127 3.61581 6.64282 3.99424 6.3065L8.61858 1.64002C9.45967 0.841037 10.7208 2.10267 9.87967 2.94322L5.8859 6.937L10.0061 11.0573Z"
              fill="var(--color-blue)"
            />
          </svg>
        </button>
        <div className="pagination__controls__textWrapper">
          {renderPageNumbers()}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination__arrow"
          role="button"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99391 2.94274C3.15281 2.10165 4.45656 0.840502 5.255 1.68165L10.0058 6.43241C10.3842 6.76873 10.3842 7.35718 10.0058 7.6935L5.38142 12.36C4.54033 13.159 3.27918 11.8973 4.12033 11.0568L8.1141 7.063L3.99391 2.94274Z"
              fill="var(--color-blue)"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
