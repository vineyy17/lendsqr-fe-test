import seeMoreIcon from '../assets/icons/see-details.svg';
import '../styles/components/UsersTableRow.scss';
import { Popover } from '@radix-ui/themes';
import eyeIcon from '../assets/icons/dropdownView.svg';
import blacklistIcon from '../assets/images/dropdownBlacklist.png';
import activateIcon from '../assets/images/dropdownActivate.png';
import { User } from '../types/userTypes';
import { formatDate } from '../utils/helpers';

interface UsersTableRowProps {
  isLast?: boolean;
  user: User;
}

const UsersTableRow = ({ isLast, user }: UsersTableRowProps) => {
  return (
    <tbody className={`tableRow ${isLast ? 'tableRow--last' : ''}`}>
      <tr className="tableRow__row">
        <td className="tableRow__row__text tableRow__row__text--org">
          {user.organization}
        </td>
        <td className="tableRow__row__text tableRow__row__text--name">
          {user.surname}
        </td>
        <td className="tableRow__row__text tableRow__row__text--email">
          {user.email}
        </td>
        <td className="tableRow__row__text tableRow__row__text--phone">
          0{user.phone}
        </td>
        <td className="tableRow__row__text tableRow__row__text--date">
          {formatDate(user.dateJoined)}
        </td>
        <td className="tableRow__row__userStatusWrapper">
          <div
            className={`tableRow__row__userStatus tableRow__row__userStatus--${user.status}`}
          >
            {user.status}
          </div>
        </td>
        <Popover.Root>
          <Popover.Trigger>
            <td>
              <img
                src={seeMoreIcon}
                alt="options icon"
                className="tableRow__row__icon"
              />
            </td>
          </Popover.Trigger>
          <Popover.Content>
            <div className="tableRow__row__popover">
              <div className="tableRow__row__popover__wrapper">
                <img
                  className="tableRow__row__popover__wrapper__viewIcon"
                  src={eyeIcon}
                  alt="view icon"
                />
                <p className="tableRow__row__popover__wrapper__text">
                  View Details
                </p>
              </div>
              <div className="tableRow__row__popover__wrapper">
                <img
                  className="tableRow__row__popover__wrapper__blacklistIcon"
                  src={blacklistIcon}
                  alt="blacklist icon"
                />
                <p className="tableRow__row__popover__wrapper__text">
                  Blacklist User
                </p>
              </div>
              <div className="tableRow__row__popover__wrapper">
                <img
                  className="tableRow__row__popover__wrapper__activateIcon"
                  src={activateIcon}
                  alt="activate icon"
                />
                <p className="tableRow__row__popover__wrapper__text">
                  Activate User
                </p>
              </div>
            </div>
          </Popover.Content>
        </Popover.Root>
      </tr>
    </tbody>
  );
};

export default UsersTableRow;
