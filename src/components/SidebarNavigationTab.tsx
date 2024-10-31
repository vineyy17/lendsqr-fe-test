import '../styles/components/SidebarNavigationTab.scss';

interface props {
  iconHeight: number;
  iconWidth: number;
  iconAltText: string;
  icon: string;
  name: string;
}

const SidebarNavigationTab = ({
  iconHeight,
  iconWidth,
  iconAltText,
  icon,
  name,
}: props) => {
  // Function to convert px to rem
  const pxToRem = (px: number) => `${px / 16}rem`;

  return (
    <div className="sidebarNav">
      <div className="sidebarNav__wrapper">
        <img
          src={icon}
          alt={iconAltText}
          className="sidebarNav__wrapper__icon"
          style={{
            width: pxToRem(iconWidth),
            height: pxToRem(iconHeight),
          }}
        />
        <p className="sidebarNav__wrapper__text">{name}</p>
      </div>
    </div>
  );
};

export default SidebarNavigationTab;
