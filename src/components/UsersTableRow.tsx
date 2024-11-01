import seeMoreIcon from '../assets/icons/see-details.svg';
import '../styles/components/UsersTableRow.scss';

interface UsersTableRowProps {
  isLast?: boolean;
}

const statuses = [
  { text: 'Active', className: 'tableRow__row__userStatus--active' },
  { text: 'Inactive', className: 'tableRow__row__userStatus--inactive' },
  { text: 'Pending', className: 'tableRow__row__userStatus--pending' },
  { text: 'Blacklisted', className: 'tableRow__row__userStatus--blacklisted' },
];

const getRandomStatus = () => {
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const UsersTableRow = ({ isLast }: UsersTableRowProps) => {
  const { text, className } = getRandomStatus();

  return (
    <tbody className={`tableRow ${isLast ? 'tableRow--last' : ''}`}>
      <tr className="tableRow__row">
        <td className="tableRow__row__text tableRow__row__text--org">
          Lendsqr
        </td>
        <td className="tableRow__row__text tableRow__row__text--name">
          Debby Ogana
        </td>
        <td className="tableRow__row__text tableRow__row__text--email">
          debby2@irorun.com
        </td>
        <td className="tableRow__row__text tableRow__row__text--phone">
          08160780928
        </td>
        <td className="tableRow__row__text tableRow__row__text--date">
          Apr 30, 2020 10:00 AM
        </td>
        <td className="tableRow__row__userStatusWrapper">
          <div className={`tableRow__row__userStatus ${className}`}>{text}</div>
        </td>
        <td>
          <img
            src={seeMoreIcon}
            alt="options icon"
            className="tableRow__row__icon"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default UsersTableRow;
