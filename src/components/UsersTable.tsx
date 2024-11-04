import '../styles/components/UsersTable.scss';
import UsersTableRow from './UsersTableRow';
import UsersTableHead from './UsersTableHead';
import { useUsers } from '../hooks/useUsers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { User } from '../types/userTypes';
import '../styles/components/Pagination.scss';
import Pagination from './Pagination';
import { useState } from 'react';

const UsersTable = () => {
  const { isLoading, users, error } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginatedUsers = users?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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
              key={index}
              isLast={index === array.length - 1}
            />
          ))}
        </table>
      </div>

      <Pagination
        totalItems={users?.length ?? 0}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
};

export default UsersTable;
