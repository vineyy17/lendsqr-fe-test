import '../styles/components/UsersTable.scss';
import FilterUsers from './FilterUsers';

const UsersTableHead = () => {
  return (
    <thead className="usersTable__table__head">
      <th className="usersTable__table__head__group usersTable__table__head__group--org">
        <p className="usersTable__table__head__group__title">Organization</p>
        <FilterUsers />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--userName">
        <p className="usersTable__table__head__group__title">Username</p>
        <FilterUsers />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--email">
        <p className="usersTable__table__head__group__title">Email</p>
        <FilterUsers />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--phone">
        <p className="usersTable__table__head__group__title">Phone number</p>
        <FilterUsers />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--date">
        <p className="usersTable__table__head__group__title">Date joined</p>
        <FilterUsers />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--status">
        <p className="usersTable__table__head__group__title">Status</p>
        <FilterUsers />
      </th>
    </thead>
  );
};

export default UsersTableHead;
