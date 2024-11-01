import '../styles/components/SidebarNavigationTab.scss';

interface props {
  iconHeight: number;
  iconWidth: number;
  iconAltText: string;
  icon: string;
  name: string;
  type?: string;
}

const SidebarNavigationTab = ({
  iconHeight,
  iconWidth,
  iconAltText,
  icon,
  name,
  type,
}: props) => {
  // Function to convert px to rem
  const pxToRem = (px: number) => `${px / 16}rem`;

  return (
    <div
      className={`sidebarNav ${type === 'users' ? 'sidebarNav--active' : ''}`}
    >
      <div className="sidebarNav__wrapper">
        <img
          src={icon}
          alt={iconAltText}
          className={`sidebarNav__wrapper__icon ${
            type === 'users' ? 'sidebarNav__wrapper__icon--active' : ''
          }`}
          style={{
            width: pxToRem(iconWidth),
            height: pxToRem(iconHeight),
          }}
        />
        <p
          className={`sidebarNav__wrapper__text ${
            type === 'users' ? 'sidebarNav__wrapper__text--active' : ''
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default SidebarNavigationTab;
