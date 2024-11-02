import arrow from '../assets/icons/back-arrow.svg';
import { useGoBack } from '../hooks/useGoBack';
import '../styles/pages/UserDetails.scss';
import UserDetailsOverview from '../components/UserDetailsOverview';
import PersonalInformation from '../components/PersonalInformation';
import EducationInformation from '../components/EducationInformation';
import SocialsInformation from '../components/SocialsInformation';
import GuarantorInformation from '../components/GuarantorInformation';

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
        <UserDetailsOverview />
      </div>
      <div className="userDetails__info">
        <PersonalInformation />
        <EducationInformation />
        <SocialsInformation />
        <GuarantorInformation />
      </div>
    </div>
  );
};

export default UserDetails;
