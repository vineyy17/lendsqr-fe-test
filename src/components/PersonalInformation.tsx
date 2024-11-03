import '../styles/components/UserInformation.scss';
import { PersonalInfo } from '../types/userDetails';

interface props {
  info: PersonalInfo;
}

const PersonalInformation = ({ info }: props) => {
  return (
    <div className="info">
      <p className="info__heading">Personal Information</p>
      <div className="info__flexWrapper">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Full Name</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.fullName}
          </p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Phone Number</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.phoneNumber}
          </p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Email Address</p>
          <p className="info__flexWrapper__column__bottomText">{info.email}</p>
        </div>
        <div className="info__flexWrapper__column bvn">
          <p className="info__flexWrapper__column__topText">Bvn</p>
          <p className="info__flexWrapper__column__bottomText">{info.bvn}</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Gender</p>
          <p className="info__flexWrapper__column__bottomText">{info.gender}</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Marital Status</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.maritalStatus}
          </p>
        </div>
        <div className="info__flexWrapper__column children">
          <p className="info__flexWrapper__column__topText">Children</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.children}
          </p>
        </div>
        <div className="info__flexWrapper__column residence">
          <p className="info__flexWrapper__column__topText">
            Type Of Residence
          </p>
          <p className="info__flexWrapper__column__bottomText">
            {info.typeOfResidence}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
