export interface UserPersonalInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

export interface UserEducationEmployment {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

export interface UserSocials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface UserGuarantor {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

export interface UserDetails {
  personalInfo: UserPersonalInfo;
  educationEmployment: UserEducationEmployment;
  socials: UserSocials;
  guarantor: UserGuarantor;
}

export interface User {
  id: number;
  organization: string;
  firstName: string;
  surname: string;
  username: string;
  email: string;
  phone: string;
  user: UserDetails;
  dateJoined: string;
  status: string;
}

export interface UsersResponse {
  users: User[];
}

export interface UsersOverviewResponse {
  totalUsers: number;
  activeUsers: number;
  usersWithLoans: number;
  usersWithSavings: number;
}
