import UsersStatsCard from '../components/UsersStatsCard';
import '../styles/pages/Users.scss';
import usersIcon from '../assets/icons/usersCircle.svg';
import activeUsersIcon from '../assets/images/activeUsersCircle.png';
import usersWithSavingsIcon from '../assets/icons/usersWithSavingsCircle.svg';
import usersWithLoanIcon from '../assets/icons/usersWithLoansCircle.svg';
import UsersTable from '../components/UsersTable';
import { useUsersOverview } from '../hooks/useUsersOverview';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Users = () => {
  const { isLoading, usersOverview, error } = useUsersOverview();

  if (isLoading)
    return (
      <div className="users">
        <p className="users__heading">Users</p>
        <div className="users__stats">
          <Skeleton
            height="10rem"
            width="15rem"
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
          />
          <Skeleton
            height="10rem"
            width="15rem"
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
          />
          <Skeleton
            height="10rem"
            width="15rem"
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
          />
          <Skeleton
            height="10rem"
            width="15rem"
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
          />
        </div>
      </div>
    );

  if (error) return <p>An error occured while fetching</p>;

  return (
    <div className="users">
      <p className="users__heading" role="heading">
        Users
      </p>
      <div className="users__stats">
        <UsersStatsCard
          name="Users"
          icon={usersIcon}
          stat={usersOverview?.totalUsers}
        />
        <UsersStatsCard
          name="Active Users"
          icon={activeUsersIcon}
          stat={usersOverview?.activeUsers}
        />
        <UsersStatsCard
          name="Users With Loans"
          icon={usersWithLoanIcon}
          stat={usersOverview?.usersWithLoans}
        />
        <UsersStatsCard
          name="Users With Savings"
          icon={usersWithSavingsIcon}
          stat={usersOverview?.usersWithSavings}
        />
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
