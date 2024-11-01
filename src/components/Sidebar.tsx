import '../styles/components/Sidebar.scss';
import SidebarNavigationTab from './SidebarNavigationTab';
import SwitchOrganizationOption from './SwitchOrganizationOption';
import homeIcon from '../assets/icons/home.svg';
import usersIcon from '../assets/icons/users.svg';
import guarantorsIcon from '../assets/icons/guarantors.svg';
import loanIcon from '../assets/icons/loan.svg';
import decisionModelsIcon from '../assets/icons/handshake.svg';
import karmaIcon from '../assets/icons/karma.svg';
import savingsIcon from '../assets/icons/piggy-bank.svg';
import loanRequestsIcon from '../assets/icons/loanRequests.svg';
import whitelistIcon from '../assets/icons/user-check.svg';
import briefCaseIcon from '../assets/icons/briefcase.svg';
import savingsProductsIcon from '../assets/icons/bank.svg';
import feesIcon from '../assets/icons/coins.svg';
import transactionsIcon from '../assets/icons/transactions.svg';
import servicesIcon from '../assets/icons/services.svg';
import serviceAccountIcon from '../assets/icons/serviceAccount.svg';
import settlementsIcon from '../assets/icons/settlements.svg';
import reportsIcon from '../assets/icons/reports.svg';
import preferencesIcon from '../assets/icons/preferences.svg';
import feesAndPricingIcon from '../assets/icons/feesAndPricing.svg';
import auditLogsIcon from '../assets/icons/audit.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SwitchOrganizationOption />
      <div className="sidebar__scrollWrapper">
        <SidebarNavigationTab
          iconAltText="home icon"
          icon={homeIcon}
          iconHeight={14.22}
          iconWidth={16}
          name="Dashboard"
        />

        <div className="sidebar__group">
          <div className="sidebar__group__container">
            <p className="sidebar__group__container__text">Customers</p>
            <SidebarNavigationTab
              iconAltText="users icon"
              type="users"
              icon={usersIcon}
              iconHeight={12.8}
              iconWidth={16}
              name="Users"
            />
            <SidebarNavigationTab
              iconAltText="guarantors icon"
              icon={guarantorsIcon}
              iconHeight={12.8}
              iconWidth={16}
              name="Guarantors"
            />
            <SidebarNavigationTab
              iconAltText="loan icon"
              icon={loanIcon}
              iconHeight={16}
              iconWidth={16}
              name="Loans"
            />
            <SidebarNavigationTab
              iconAltText="handshake icon"
              icon={decisionModelsIcon}
              iconHeight={15.2}
              iconWidth={19}
              name="Decision Models"
            />
            <SidebarNavigationTab
              iconAltText="savings icon"
              icon={savingsIcon}
              iconHeight={14.22}
              iconWidth={16}
              name="Savings"
            />
            <SidebarNavigationTab
              iconAltText="loan requests icon"
              icon={loanRequestsIcon}
              iconHeight={22}
              iconWidth={18}
              name="Loan requests"
            />
            <SidebarNavigationTab
              iconAltText="whitelist icon"
              icon={whitelistIcon}
              iconHeight={12.8}
              iconWidth={16}
              name="Whitelist"
            />
            <SidebarNavigationTab
              iconAltText="karma icon"
              icon={karmaIcon}
              iconHeight={12.8}
              iconWidth={16}
              name="Karma"
            />
          </div>
          <div className="sidebar__group__container">
            <p className="sidebar__group__container__text">Businesses</p>
            <SidebarNavigationTab
              iconAltText="briefcase icon"
              icon={briefCaseIcon}
              iconHeight={16}
              iconWidth={16}
              name="Organization"
            />
            <SidebarNavigationTab
              iconAltText="loan product icon"
              icon={loanRequestsIcon}
              iconHeight={22}
              iconWidth={18}
              name="Loan Products"
            />
            <SidebarNavigationTab
              iconAltText="bank icon"
              icon={savingsProductsIcon}
              iconHeight={16}
              iconWidth={16}
              name="Savings Products"
            />
            <SidebarNavigationTab
              iconAltText="coin icon"
              icon={feesIcon}
              iconHeight={16}
              iconWidth={16}
              name="Fees and Charges"
            />
            <SidebarNavigationTab
              iconAltText="transactions icon"
              icon={transactionsIcon}
              iconHeight={18}
              iconWidth={16}
              name="Transactions"
            />
            <SidebarNavigationTab
              iconAltText="services icon"
              icon={servicesIcon}
              iconHeight={16}
              iconWidth={16}
              name="Services"
            />
            <SidebarNavigationTab
              iconAltText="service account icon"
              icon={serviceAccountIcon}
              iconHeight={12.8}
              iconWidth={16}
              name="Service Account"
            />
            <SidebarNavigationTab
              iconAltText="settlements icon"
              icon={settlementsIcon}
              iconHeight={12.8}
              iconWidth={16}
              name="Settlements"
            />
            <SidebarNavigationTab
              iconAltText="reports icon"
              icon={reportsIcon}
              iconHeight={16}
              iconWidth={16}
              name="Reports"
            />
          </div>
          <div className="sidebar__group__container">
            <p className="sidebar__group__container__text">Settings</p>
            <SidebarNavigationTab
              iconAltText="preferences icon"
              icon={preferencesIcon}
              iconHeight={16}
              iconWidth={16}
              name="Preferences"
            />
            <SidebarNavigationTab
              iconAltText="fees and pricing icon"
              icon={feesAndPricingIcon}
              iconHeight={16}
              iconWidth={16}
              name="Fees and Pricing"
            />
            <SidebarNavigationTab
              iconAltText="audit logs icon"
              icon={auditLogsIcon}
              iconHeight={21.33}
              iconWidth={16}
              name="Audit Logs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
