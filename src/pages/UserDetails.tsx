import arrow from '../assets/icons/back-arrow.svg';
import { useGoBack } from '../hooks/useGoBack';
import '../styles/pages/UserDetails.scss';
import UserDetailsOverview from '../components/UserDetailsOverview';
import PersonalInformation from '../components/PersonalInformation';
import EducationInformation from '../components/EducationInformation';
import SocialsInformation from '../components/SocialsInformation';
import GuarantorInformation from '../components/GuarantorInformation';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { UserDetails as UserDetailsType } from '../types/userDetails';

const UserDetails = () => {
  const goBack = useGoBack();

  const [user, _] = useLocalStorage<UserDetailsType>('user');

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
        <UserDetailsOverview info={user.accountInfo} />
      </div>
      <div className="userDetails__info">
        <PersonalInformation info={user.personalInfo} />
        <EducationInformation info={user.educationEmployment} />
        <SocialsInformation info={user.socials} />
        <GuarantorInformation info={user.guarantor} />
      </div>
    </div>
  );
};

export default UserDetails;
