// Icon imports
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

export interface SidebarTabItem {
  name: string;
  icon: string;
  iconAltText: string;
  iconWidth: number;
  iconHeight: number;
}

export interface SidebarSection {
  section: string;
  items: SidebarTabItem[];
}

// Sidebar configuration
export const sidebarConfig: SidebarSection[] = [
  {
    section: 'Main',
    items: [
      {
        name: 'Dashboard',
        icon: homeIcon,
        iconAltText: 'home icon',
        iconWidth: 16,
        iconHeight: 14.22,
      },
    ],
  },
  {
    section: 'Customers',
    items: [
      {
        name: 'Users',
        icon: usersIcon,
        iconAltText: 'users icon',
        iconWidth: 16,
        iconHeight: 12.8,
      },
      {
        name: 'Guarantors',
        icon: guarantorsIcon,
        iconAltText: 'guarantors icon',
        iconWidth: 16,
        iconHeight: 12.8,
      },
      {
        name: 'Loans',
        icon: loanIcon,
        iconAltText: 'loan icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Decision Models',
        icon: decisionModelsIcon,
        iconAltText: 'handshake icon',
        iconWidth: 19,
        iconHeight: 15.2,
      },
      {
        name: 'Savings',
        icon: savingsIcon,
        iconAltText: 'savings icon',
        iconWidth: 16,
        iconHeight: 14.22,
      },
      {
        name: 'Loan Requests',
        icon: loanRequestsIcon,
        iconAltText: 'loan requests icon',
        iconWidth: 18,
        iconHeight: 22,
      },
      {
        name: 'Whitelist',
        icon: whitelistIcon,
        iconAltText: 'whitelist icon',
        iconWidth: 16,
        iconHeight: 12.8,
      },
      {
        name: 'Karma',
        icon: karmaIcon,
        iconAltText: 'karma icon',
        iconWidth: 16,
        iconHeight: 12.8,
      },
    ],
  },
  {
    section: 'Businesses',
    items: [
      {
        name: 'Organization',
        icon: briefCaseIcon,
        iconAltText: 'briefcase icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Loan Products',
        icon: loanRequestsIcon,
        iconAltText: 'loan product icon',
        iconWidth: 18,
        iconHeight: 22,
      },
      {
        name: 'Savings Products',
        icon: savingsProductsIcon,
        iconAltText: 'bank icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Fees and Charges',
        icon: feesIcon,
        iconAltText: 'coin icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Transactions',
        icon: transactionsIcon,
        iconAltText: 'transactions icon',
        iconWidth: 16,
        iconHeight: 18,
      },
      {
        name: 'Services',
        icon: servicesIcon,
        iconAltText: 'services icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Service Account',
        icon: serviceAccountIcon,
        iconAltText: 'service account icon',
        iconWidth: 16,
        iconHeight: 12.8,
      },
      {
        name: 'Settlements',
        icon: settlementsIcon,
        iconAltText: 'settlements icon',
        iconWidth: 16,
        iconHeight: 12.8,
      },
      {
        name: 'Reports',
        icon: reportsIcon,
        iconAltText: 'reports icon',
        iconWidth: 16,
        iconHeight: 16,
      },
    ],
  },
  {
    section: 'Settings',
    items: [
      {
        name: 'Preferences',
        icon: preferencesIcon,
        iconAltText: 'preferences icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Fees and Pricing',
        icon: feesAndPricingIcon,
        iconAltText: 'fees and pricing icon',
        iconWidth: 16,
        iconHeight: 16,
      },
      {
        name: 'Audit Logs',
        icon: auditLogsIcon,
        iconAltText: 'audit logs icon',
        iconWidth: 16,
        iconHeight: 21.33,
      },
    ],
  },
];
