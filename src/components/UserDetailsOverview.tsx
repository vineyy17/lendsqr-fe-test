import '../styles/pages/UserDetails.scss';
import profilePicture from '../assets/images/userImage.png';
import fullStar from '../assets/icons/full-star.svg';
import emptyStar from '../assets/icons/empty-star.svg';
import { AccountInfo } from '../types/userDetails';
import toast from 'react-hot-toast';

interface props {
  info: AccountInfo;
}

const UserDetailsOverview = ({ info }: props) => {
  return (
    <>
      <div className="userDetails__overview__wrapper">
        <p className="userDetails__overview__wrapper__heading">User Details</p>
        <div className="userDetails__overview__wrapper__buttonWrapper">
          <button
            className="userDetails__overview__wrapper__buttonWrapper__blacklist"
            onClick={() => toast.success('User successfully blacklisted')}
          >
            Blacklist User
          </button>
          <button
            className="userDetails__overview__wrapper__buttonWrapper__activate"
            onClick={() => toast.success('User successfully activated')}
          >
            Activate User
          </button>
        </div>
      </div>
      <div
        data-testid="user-details-overview"
        className="userDetails__overview__box"
      >
        <div className="userDetails__overview__box__container">
          <div className="userDetails__overview__box__container__name">
            <img
              src={profilePicture}
              alt="profile image"
              className="userDetails__overview__box__container__name__avatar"
            />
            <div className="userDetails__overview__box__container__name__details">
              <p className="userDetails__overview__box__container__name__details__name">
                {info.fullName}
              </p>
              <p className="userDetails__overview__box__container__name__details__id">
                {info.id}
              </p>
            </div>
          </div>
          <div className="userDetails__overview__box__container__tierWrapper">
            <div className="userDetails__overview__box__container__tier">
              <p className="userDetails__overview__box__container__tier__text">
                User’s Tier
              </p>
              <div className="userDetails__overview__box__container__tier__stars">
                <img
                  src={fullStar}
                  alt="star icon"
                  className="userDetails__overview__box__container__tier__stars__icon"
                />
                <img
                  src={emptyStar}
                  alt="star icon"
                  className="userDetails__overview__box__container__tier__stars__icon"
                />
                <img
                  src={emptyStar}
                  alt="star icon"
                  className="userDetails__overview__box__container__tier__stars__icon"
                />
              </div>
            </div>
          </div>
          <div className="userDetails__overview__box__container__bank">
            <p className="userDetails__overview__box__container__bank__amount">
              {info.balance}
            </p>
            <p className="userDetails__overview__box__container__bank__account">
              {info.accountNumber}/{info.bankName}
            </p>
          </div>
        </div>
        <div className="userDetails__overview__box__tabs">
          <div className="userDetails__overview__box__tabs__box active">
            <p className="userDetails__overview__box__tabs__box__text active">
              General Details
            </p>
          </div>
          <div className="userDetails__overview__box__tabs__box">
            <p className="userDetails__overview__box__tabs__box__text">
              Documents
            </p>
          </div>
          <div className="userDetails__overview__box__tabs__box">
            <p className="userDetails__overview__box__tabs__box__text">
              Bank Details
            </p>
          </div>
          <div className="userDetails__overview__box__tabs__box">
            <p className="userDetails__overview__box__tabs__box__text">Loans</p>
          </div>
          <div className="userDetails__overview__box__tabs__box">
            <p className="userDetails__overview__box__tabs__box__text">
              Savings
            </p>
          </div>
          <div className="userDetails__overview__box__tabs__box">
            <p className="userDetails__overview__box__tabs__box__text">
              App and System
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailsOverview;
