import '../styles/components/UserInformation.scss';
import { Guarantor } from '../types/userDetails';

interface props {
  info: Guarantor;
}

const GuarantorInformation = ({ info }: props) => {
  return (
    <div className="info guarantor">
      <p className="info__heading">Guarantor</p>
      <div className="info__flexWrapper guarantor">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Full Name</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.fullName}
          </p>
        </div>
        <div className="info__flexWrapper__column phone">
          <p className="info__flexWrapper__column__topText">Phone Number</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.phoneNumber}
          </p>
        </div>
        <div className="info__flexWrapper__column email">
          <p className="info__flexWrapper__column__topText">Email Address</p>
          <p className="info__flexWrapper__column__bottomText">{info.email}</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Relationship</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.relationship}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuarantorInformation;
