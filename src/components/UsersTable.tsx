import '../styles/components/UsersTable.scss';
import UsersTableRow from './UsersTableRow';
import UsersTableHead from './UsersTableHead';
import { useUsers } from '../hooks/useUsers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { User } from '../types/userTypes';
import '../styles/components/Pagination.scss';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { useFilterStore } from '../store/filterStore';
import notFound from '../assets/images/notFound.webp';
import { useSearchParams } from 'react-router-dom';

const UsersTable = () => {
  const { isLoading, users, error } = useUsers();
  const { filteredUsers, resetFilters } = useFilterStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchParams, setSearchParams] = useSearchParams();

  const displayedUsers = filteredUsers || users;

  const paginatedUsers = displayedUsers?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
    setSearchParams({ ...Object.fromEntries(searchParams), page: '1' });
  }, [filteredUsers]);

  if (filteredUsers?.length === 0) {
    return (
      <div className="usersTable">
        <table className="usersTable__table">
          <UsersTableHead />
          <div className="usersTable__noResults">
            <img
              src={notFound}
              alt="404 image"
              className="usersTable__noResults__image"
            />
            <p className="usersTable__noResults__text">
              No user matches the filter criteria
            </p>
            <button
              className="usersTable__noResults__button"
              onClick={resetFilters}
            >
              Display all users
            </button>
          </div>
        </table>
      </div>
    );
  }

  if (isLoading)
    return (
      <div className="usersTable usersTable--loading">
        <table className="usersTable__table">
          <Skeleton
            height="40rem"
            width="100%"
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
          />
        </table>
      </div>
    );

  if (error) return <p>An error occured while fetching</p>;

  return (
    <div className="usersTableWrapper">
      <div className="usersTable">
        <table className="usersTable__table">
          <UsersTableHead />
          {paginatedUsers?.map((user: User, index: number, array) => (
            <UsersTableRow
              user={user}
              key={user.id}
              isLast={index === array.length - 1}
            />
          ))}
        </table>
      </div>

      <Pagination
        totalItems={displayedUsers?.length ?? 0}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
};

export default UsersTable;
