import '../styles/components/SwitchOrganizationOption.scss';
import switchDropDown from '../assets/icons/switchDrop.svg';
import briefcaseIcon from '../assets/icons/briefcase.svg';

const SwitchOrganizationOption = () => {
  return (
    <div className="switchWrapper">
      <div className="switch">
        <img
          src={briefcaseIcon}
          alt="briefcase icon"
          className="switch__briefcase"
        />
        <p className="switch__text">Switch Organization</p>
        <img
          src={switchDropDown}
          alt="dropdown icon"
          className="switch__dropdown"
        />
      </div>
    </div>
  );
};

export default SwitchOrganizationOption;
