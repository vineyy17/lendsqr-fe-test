import '../styles/components/SwitchOrganizationOption.scss';
import switchDropDown from '../assets/icons/switchDrop.svg';
import briefcaseIcon from '../assets/icons/briefcase.svg';
import { useState } from 'react';

const SwitchOrganizationOption = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the popup visibility when the switch div is clicked
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
          onClick={togglePopup}
        />
      </div>

      {isOpen && (
        <div className="switch__popover">
          {['Organization 1', 'Organization 2', 'Organization 3'].map(
            (org, index) => (
              <p key={index} onClick={togglePopup}>
                {org}
              </p>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default SwitchOrganizationOption;
