import '../styles/components/Header.scss';
import logo from '../assets/icons/logo-small.svg';
import search from '../assets/icons/search.svg';
import notification from '../assets/images/notification.jpg';
import avatar from '../assets/images/avatar.png';
import dropDown from '../assets/icons/dropdown.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} className="header__left__logo" alt="logo" />
        <div className="header__left__searchWrapper">
          <input
            className="header__left__searchWrapper__input"
            placeholder="Search for anything"
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
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
