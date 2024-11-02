import arrow from '../assets/icons/back-arrow.svg';
import { useGoBack } from '../hooks/useGoBack';
import '../styles/pages/UserDetails.scss';

const UserDetails = () => {
  const goBack = useGoBack();

  return (
    <div className="userDetails">
      <div className="userDetails__top">
        <img
          src={arrow}
          alt="left arrow icon"
          className="userDetails__top__arrow"
          onClick={goBack}
        />
        <p className="userDetails__top__text">Back to Users</p>
      </div>
      <div className="userDetails__overview">
        <div className="userDetails__overview__wrapper">
          <p className="userDetails__overview__wrapper__heading">
            User Details
          </p>
          <div className="userDetails__overview__wrapper__buttonWrapper">
            <button className="userDetails__overview__wrapper__buttonWrapper__blacklist">
              Blacklist User
            </button>
            <button className="userDetails__overview__wrapper__buttonWrapper__activate">
              Activate User
            </button>
          </div>
        </div>
        <div className="userDetails__overview__box"></div>
      </div>
      <div></div>
    </div>
  );
};

export default UserDetails;
