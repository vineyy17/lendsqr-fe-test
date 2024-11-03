// Personal Info Type
export interface PersonalInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

// Education and Employment Type
export interface EducationEmployment {
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

// Socials Type
export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

// Guarantor Type
export interface Guarantor {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

// Account Info Type
export interface AccountInfo {
  balance: string;
  accountNumber: string;
  bankName: string;
  id: string;
  fullName: string;
}

// UserDetails
export interface UserDetails {
  personalInfo: PersonalInfo;
  educationEmployment: EducationEmployment;
  socials: Socials;
  guarantor: Guarantor;
  accountInfo: AccountInfo;
}
