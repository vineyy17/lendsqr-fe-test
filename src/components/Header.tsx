import '../styles/components/Header.scss';
import logo from '../assets/icons/logo-small.svg';
import search from '../assets/icons/search.svg';
import notification from '../assets/images/notification.jpg';
import avatar from '../assets/images/avatar.png';
import dropDown from '../assets/icons/dropdown.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useUsers } from '../hooks/useUsers';
import { useFilterStore } from '../store/filterStore';
import { useState, ChangeEvent } from 'react';
import { LuLogOut } from 'react-icons/lu';
import { useAuth } from '../context/AuthContext';
import seeMoreIcon from '../assets/icons/see-details.svg';
import { VscBell } from 'react-icons/vsc';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { logout } = useAuth();
  const { users } = useUsers();
  const { setFilteredUsers } = useFilterStore();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [mobilePopoverVisible, setMobilePopoverVisible] =
    useState<boolean>(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredUsers(users ?? []);
      return;
    }

    const filtered = (users ?? []).filter((user) => {
      const matchesUsername = user.username.toLowerCase().includes(query);
      const matchesEmail = user.email.toLowerCase().includes(query);
      const matchesPhone = `0${user.phone}`.includes(query);
      const matchesOrganization = user.organization
        .toLowerCase()
        .includes(query);

      return (
        matchesUsername || matchesEmail || matchesPhone || matchesOrganization
      );
    });

    setFilteredUsers(filtered);
  };

  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
  };

  const toggleMobilePopover = () => {
    setMobilePopoverVisible((prev) => !prev);
  };

  return (
    <div className="header">
      <RxHamburgerMenu
        data-testid="hamburger-menu"
        onClick={toggleSidebar}
        className="header__hamburger"
      />
      <div className="header__left">
        <img src={logo} className="header__left__logo" alt="logo" />
        <div className="header__left__searchWrapper">
          <input
            className="header__left__searchWrapper__input"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="header__left__searchWrapper__search">
            <img
              className="header__left__searchWrapper__search__icon"
              src={search}
              alt="search icon"
            />
          </div>
        </div>
      </div>
      <div className="header__info">
        <p className="header__info__docs">Docs</p>
        <img
          src={notification}
          className="header__info__notification"
          alt="notification icon"
        />
        <img
          src={avatar}
          className="header__info__profile"
          alt="profile picture"
        />

        <div className="header__info__name">
          <p className="header__info__name__text">Adedeji</p>
          <img
            className="header__info__name__drop"
            src={dropDown}
            alt="dropdown icon"
            onClick={togglePopover}
          />
        </div>

        {popoverVisible && (
          <div className="header__info__popover">
            <div className="header__info__popover__flex" onClick={logout}>
              <LuLogOut className="header__info__popover__flex__icon" />
              <p className="header__info__popover__flex__text">Logout</p>
            </div>
          </div>
        )}
      </div>

      <img
        src={seeMoreIcon}
        alt="options icon"
        className="header__options"
        onClick={toggleMobilePopover}
      />

      {mobilePopoverVisible && (
        <div className="header__mobilePopover">
          <p
            className="header__mobilePopover__documentation"
            onClick={toggleMobilePopover}
          >
            Documentation
          </p>
          <div
            className="header__mobilePopover__profile"
            onClick={toggleMobilePopover}
          >
            <img
              src={avatar}
              className="header__mobilePopover__profile__image"
              alt="profile picture"
            />
            <div className="header__mobilePopover__profile__name">
              <p className="header__mobilePopover__profile__name__text">
                Adedeji
              </p>
            </div>
          </div>

          <div
            className="header__mobilePopover__notification"
            onClick={toggleMobilePopover}
          >
            <VscBell className="header__mobilePopover__notification__icon" />
            <p className="header__mobilePopover__notification__text">
              Notifications
            </p>
          </div>

          <div className="header__mobilePopover__logout" onClick={logout}>
            <LuLogOut className="header__mobilePopover__logout__icon" />
            <p className="header__mobilePopover__logout__text">Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
