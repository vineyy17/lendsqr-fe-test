import '../styles/components/UserInformation.scss';

const EducationInformation = () => {
  return (
    <div className="info ">
      <p className="info__heading">Education and Employment</p>
      <div className="info__flexWrapper education">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">
            level of education
          </p>
          <p className="info__flexWrapper__column__bottomText">B.Sc</p>
        </div>
        <div className="info__flexWrapper__column status">
          <p className="info__flexWrapper__column__topText ">
            employment status
          </p>
          <p className="info__flexWrapper__column__bottomText">Employed</p>
        </div>
        <div className="info__flexWrapper__column sector">
          <p className="info__flexWrapper__column__topText">
            sector of employment
          </p>
          <p className="info__flexWrapper__column__bottomText">FinTech</p>
        </div>
        <div className="info__flexWrapper__column duration">
          <p className="info__flexWrapper__column__topText">
            Duration of employment
          </p>
          <p className="info__flexWrapper__column__bottomText">2 years</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">office email</p>
          <p className="info__flexWrapper__column__bottomText">
            grace@lendsqr.com
          </p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Monthly income</p>
          <p className="info__flexWrapper__column__bottomText">
            ₦200,000.00- ₦400,000.00
          </p>
        </div>
        <div className="info__flexWrapper__column children">
          <p className="info__flexWrapper__column__topText">loan repayment</p>
          <p className="info__flexWrapper__column__bottomText">40,000</p>
        </div>
      </div>
    </div>
  );
};

export default EducationInformation;
