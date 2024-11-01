import UsersStatsCard from '../components/UsersStatsCard';
import '../styles/pages/Users.scss';
import usersIcon from '../assets/icons/usersCircle.svg';
import activeUsersIcon from '../assets/images/activeUsersCircle.png';
import usersWithSavingsIcon from '../assets/icons/usersWithSavingsCircle.svg';
import usersWithLoanIcon from '../assets/icons/usersWithLoansCircle.svg';
import UsersTable from '../components/UsersTable';

const Users = () => {
  return (
    <div className="users">
      <p className="users__heading">Users</p>
      <div className="users__stats">
        <UsersStatsCard name="Users" icon={usersIcon} stat="2453" />
        <UsersStatsCard
          name="Active Users"
          icon={activeUsersIcon}
          stat="2453"
        />
        <UsersStatsCard
          name="Users With Loans"
          icon={usersWithLoanIcon}
          stat="12,453"
        />
        <UsersStatsCard
          name="Users With Savings"
          icon={usersWithSavingsIcon}
          stat="102,453"
        />
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
