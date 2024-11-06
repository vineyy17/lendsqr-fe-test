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

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { logout } = useAuth();
  const { users } = useUsers();
  const { setFilteredUsers } = useFilterStore();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

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
    </div>
  );
};

export default Header;
