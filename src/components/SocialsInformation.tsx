import '../styles/components/UserInformation.scss';

const SocialsInformation = () => {
  return (
    <div className="info">
      <p className="info__heading">Socials</p>
      <div className="info__flexWrapper socials">
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Twitter</p>
          <p className="info__flexWrapper__column__bottomText">@grace_effiom</p>
        </div>
        <div className="info__flexWrapper__column">
          <p className="info__flexWrapper__column__topText">Facebook</p>
          <p className="info__flexWrapper__column__bottomText">Grace Effiom</p>
        </div>
        <div className="info__flexWrapper__column sector instagram">
          <p className="info__flexWrapper__column__topText">Instagram</p>
          <p className="info__flexWrapper__column__bottomText">@grace_effiom</p>
        </div>
      </div>
    </div>
  );
};

export default SocialsInformation;
