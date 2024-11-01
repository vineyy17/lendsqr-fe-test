import '../styles/components/UsersTable.scss';
import UsersTableRow from './UsersTableRow';
import UsersTableHead from './UsersTableHead';

const UsersTable = () => {
  return (
    <div className="usersTable">
      <table className="usersTable__table">
        <UsersTableHead />
        {Array.from({ length: 9 }).map((_, index, array) => (
          <UsersTableRow key={index} isLast={index === array.length - 1} />
        ))}
      </table>
    </div>
  );
};

export default UsersTable;
