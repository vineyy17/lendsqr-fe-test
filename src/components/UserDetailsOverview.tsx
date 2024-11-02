import '../styles/pages/UserDetails.scss';
import profilePicture from '../assets/images/userImage.png';
import fullStar from '../assets/icons/full-star.svg';
import emptyStar from '../assets/icons/empty-star.svg';

const UserDetailsOverview = () => {
  return (
    <>
      <div className="userDetails__overview__wrapper">
        <p className="userDetails__overview__wrapper__heading">User Details</p>
        <div className="userDetails__overview__wrapper__buttonWrapper">
          <button className="userDetails__overview__wrapper__buttonWrapper__blacklist">
            Blacklist User
          </button>
          <button className="userDetails__overview__wrapper__buttonWrapper__activate">
            Activate User
          </button>
        </div>
      </div>
      <div className="userDetails__overview__box">
        <div className="userDetails__overview__box__container">
          <div className="userDetails__overview__box__container__name">
            <img
              src={profilePicture}
              alt="profile image"
              className="userDetails__overview__box__container__name__avatar"
            />
            <div className="userDetails__overview__box__container__name__details">
              <p className="userDetails__overview__box__container__name__details__name">
                Grace Effiom
              </p>
              <p className="userDetails__overview__box__container__name__details__id">
                LSQFf587g90
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
              ₦200,000.00
            </p>
            <p className="userDetails__overview__box__container__bank__account">
              9912345678/Providus Bank
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
