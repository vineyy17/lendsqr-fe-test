import '../styles/components/Sidebar.scss';
import SidebarNavigationTab from './SidebarNavigationTab';
import SwitchOrganizationOption from './SwitchOrganizationOption';
import { sidebarConfig } from '../data/sidebarTabs';

const Sidebar = () => (
  <div className="sidebar">
    <SwitchOrganizationOption />
    <div className="sidebar__scrollWrapper">
      <SidebarNavigationTab
        iconAltText="home icon"
        icon={sidebarConfig[0].items[0].icon}
        iconHeight={sidebarConfig[0].items[0].iconHeight}
        iconWidth={sidebarConfig[0].items[0].iconWidth}
        name={sidebarConfig[0].items[0].name}
      />
      {sidebarConfig.slice(1).map(({ section, items }) => (
        <div className="sidebar__group" key={section}>
          <div className="sidebar__group__container">
            <p className="sidebar__group__container__text">{section}</p>
            {items.map((item) => (
              <SidebarNavigationTab
                key={item.name}
                iconAltText={item.iconAltText}
                icon={item.icon}
                iconHeight={item.iconHeight}
                iconWidth={item.iconWidth}
                name={item.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
