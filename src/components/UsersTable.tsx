import '../styles/components/UsersTable.scss';
import UsersTableRow from './UsersTableRow';
import UsersTableHead from './UsersTableHead';
import { useUsers } from '../hooks/useUsers';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { User } from '../types/userTypes';

const UsersTable = () => {
  const { isLoading, users, error } = useUsers();

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
    <div className="usersTable">
      <table className="usersTable__table">
        <UsersTableHead />
        {users?.slice(0, 9).map((user: User, index: number, array) => (
          <UsersTableRow
            user={user}
            key={index}
            isLast={index === array.length - 1}
          />
        ))}
      </table>
    </div>
  );
};

export default UsersTable;
