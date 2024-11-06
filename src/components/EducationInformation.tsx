import '../styles/components/UserInformation.scss';
import { EducationEmployment } from '../types/userDetails';

interface props {
  info: EducationEmployment;
}

const EducationInformation = ({ info }: props) => {
  return (
    <div className="info" data-testid="education-information">
      <p className="info__heading">Education and Employment</p>
      <div className="info__flexWrapper education">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">
            level of education
          </p>
          <p className="info__flexWrapper__column__bottomText">
            {info.levelOfEducation}
          </p>
        </div>
        <div className="info__flexWrapper__column status">
          <p className="info__flexWrapper__column__topText ">
            employment status
          </p>
          <p className="info__flexWrapper__column__bottomText">
            {info.employmentStatus}
          </p>
        </div>
        <div className="info__flexWrapper__column sector">
          <p className="info__flexWrapper__column__topText">
            sector of employment
          </p>
          <p className="info__flexWrapper__column__bottomText">
            {info.sectorOfEmployment}
          </p>
        </div>
        <div className="info__flexWrapper__column duration">
          <p className="info__flexWrapper__column__topText">
            Duration of employment
          </p>
          <p className="info__flexWrapper__column__bottomText">
            {info.durationOfEmployment}
          </p>
        </div>
        <div className="info__flexWrapper__column officeEmail">
          <p className="info__flexWrapper__column__topText">office email</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.officeEmail}
          </p>
        </div>
        <div className="info__flexWrapper__column income">
          <p className="info__flexWrapper__column__topText">Monthly income</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.monthlyIncome}
          </p>
        </div>
        <div className="info__flexWrapper__column children">
          <p className="info__flexWrapper__column__topText">loan repayment</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.loanRepayment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationInformation;
