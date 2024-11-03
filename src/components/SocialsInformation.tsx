import '../styles/components/UserInformation.scss';
import { Socials } from '../types/userDetails';

interface props {
  info: Socials;
}

const SocialsInformation = ({ info }: props) => {
  return (
    <div className="info">
      <p className="info__heading">Socials</p>
      <div className="info__flexWrapper socials">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Twitter</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.twitter}
          </p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Facebook</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.facebook}
          </p>
        </div>
        <div className="info__flexWrapper__column sector instagram">
          <p className="info__flexWrapper__column__topText">Instagram</p>
          <p className="info__flexWrapper__column__bottomText">
            {info.instagram}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialsInformation;
