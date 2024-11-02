import '../styles/components/UserInformation.scss';

const GuarantorInformation = () => {
  return (
    <div className="info guarantor">
      <p className="info__heading">Guarantor</p>
      <div className="info__flexWrapper guarantor">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Full Name</p>
          <p className="info__flexWrapper__column__bottomText">Debby Ogana</p>
        </div>
        <div className="info__flexWrapper__column phone">
          <p className="info__flexWrapper__column__topText">Phone Number</p>
          <p className="info__flexWrapper__column__bottomText">07060780922</p>
        </div>
        <div className="info__flexWrapper__column email">
          <p className="info__flexWrapper__column__topText">Email Address</p>
          <p className="info__flexWrapper__column__bottomText">
            debby@gmail.com
          </p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Relationship</p>
          <p className="info__flexWrapper__column__bottomText">Sister</p>
        </div>
      </div>
    </div>
  );
};

export default GuarantorInformation;
