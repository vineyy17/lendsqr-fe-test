import '../styles/components/UsersTable.scss';
import filter from '../assets/icons/table-filter.svg';
import UsersTableRow from './UsersTableRow';

const UsersTable = () => {
  return (
    <div className="usersTable">
      <table className="usersTable__table">
        <thead className="usersTable__table__head">
          <th className="usersTable__table__head__group usersTable__table__head__group--org">
            <p className="usersTable__table__head__group__title">
              Organization
            </p>
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
            <p className="usersTable__table__head__group__title">
              Phone number
            </p>
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
        {Array.from({ length: 9 }).map((_, index, array) => (
          <UsersTableRow key={index} isLast={index === array.length - 1} />
        ))}
      </table>
    </div>
  );
};

export default UsersTable;
