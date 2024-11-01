import '../styles/components/UsersTable.scss';
import filter from '../assets/icons/table-filter.svg';

const UsersTableHead = () => {
  return (
    <thead className="usersTable__table__head">
      <th className="usersTable__table__head__group usersTable__table__head__group--org">
        <p className="usersTable__table__head__group__title">Organization</p>
        <img
          className="usersTable__table__head__group__icon"
          src={filter}
          alt="filter"
        />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--userName">
        <p className="usersTable__table__head__group__title">Username</p>
        <img
          className="usersTable__table__head__group__icon"
          src={filter}
          alt="filter"
        />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--email">
        <p className="usersTable__table__head__group__title">Email</p>
        <img
          className="usersTable__table__head__group__icon"
          src={filter}
          alt="filter"
        />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--phone">
        <p className="usersTable__table__head__group__title">Phone number</p>
        <img
          className="usersTable__table__head__group__icon"
          src={filter}
          alt="filter"
        />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--date">
        <p className="usersTable__table__head__group__title">Date joined</p>
        <img
          className="usersTable__table__head__group__icon"
          src={filter}
          alt="filter"
        />
      </th>
      <th className="usersTable__table__head__group usersTable__table__head__group--status">
        <p className="usersTable__table__head__group__title">Status</p>
        <img
          className="usersTable__table__head__group__icon"
          src={filter}
          alt="filter"
        />
      </th>
    </thead>
  );
};

export default UsersTableHead;
