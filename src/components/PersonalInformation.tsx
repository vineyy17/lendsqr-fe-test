import '../styles/components/UserInformation.scss';

const PersonalInformation = () => {
  return (
    <div className="info">
      <p className="info__heading">Personal Information</p>
      <div className="info__flexWrapper">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Full Name</p>
          <p className="info__flexWrapper__column__bottomText">Grace Effiom</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Phone Number</p>
          <p className="info__flexWrapper__column__bottomText">07060780922</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Email Address</p>
          <p className="info__flexWrapper__column__bottomText">
            grace@gmail.com
          </p>
        </div>
        <div className="info__flexWrapper__column bvn">
          <p className="info__flexWrapper__column__topText">Bvn</p>
          <p className="info__flexWrapper__column__bottomText">07060780922</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Gender</p>
          <p className="info__flexWrapper__column__bottomText">Female</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Marital Status</p>
          <p className="info__flexWrapper__column__bottomText">Single</p>
        </div>
        <div className="info__flexWrapper__column children">
          <p className="info__flexWrapper__column__topText">Children</p>
          <p className="info__flexWrapper__column__bottomText">None</p>
        </div>
        <div className="info__flexWrapper__column residence">
          <p className="info__flexWrapper__column__topText">
            Type Of Residence
          </p>
          <p className="info__flexWrapper__column__bottomText">
            Parent's Apartment
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
