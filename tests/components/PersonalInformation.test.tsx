import { render, screen } from '@testing-library/react';
import PersonalInformation from '../../src/components/PersonalInformation';

// Mock PersonalInfo data type for testing
const mockPersonalInfo = {
  fullName: 'Jane Doe',
  phoneNumber: '987-654-3210',
  email: 'janedoe@example.com',
  bvn: '1234567890',
  gender: 'Female',
  maritalStatus: 'Single',
  children: 'None',
  typeOfResidence: 'Apartment',
};

describe('PersonalInformation', () => {
  it('renders the "Personal Information" heading correctly', () => {
    render(<PersonalInformation info={mockPersonalInfo} />);

    // Check if the "Personal Information" heading is rendered correctly
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('renders all personal details correctly', () => {
    render(<PersonalInformation info={mockPersonalInfo} />);

    // Check if all sections are rendered with their corresponding data
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.fullName)).toBeInTheDocument();

    expect(screen.getByText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.phoneNumber)).toBeInTheDocument();

    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.email)).toBeInTheDocument();

    expect(screen.getByText('Bvn')).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.bvn)).toBeInTheDocument();

    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.gender)).toBeInTheDocument();

    expect(screen.getByText('Marital Status')).toBeInTheDocument();
    expect(
      screen.getByText(mockPersonalInfo.maritalStatus),
    ).toBeInTheDocument();

    expect(screen.getByText('Children')).toBeInTheDocument();
    expect(screen.getByText(mockPersonalInfo.children)).toBeInTheDocument();

    expect(screen.getByText('Type Of Residence')).toBeInTheDocument();
    expect(
      screen.getByText(mockPersonalInfo.typeOfResidence),
    ).toBeInTheDocument();
  });

  it('applies the correct CSS classes to each section', () => {
    render(<PersonalInformation info={mockPersonalInfo} />);

    // Check if the correct classes are applied to each column
    const fullNameColumn = screen
      .getByText('Full Name')
      .closest('.info__flexWrapper__column');
    const phoneColumn = screen
      .getByText('Phone Number')
      .closest('.info__flexWrapper__column');
    const emailColumn = screen
      .getByText('Email Address')
      .closest('.info__flexWrapper__column');
    const bvnColumn = screen
      .getByText('Bvn')
      .closest('.info__flexWrapper__column');
    const genderColumn = screen
      .getByText('Gender')
      .closest('.info__flexWrapper__column');
    const maritalStatusColumn = screen
      .getByText('Marital Status')
      .closest('.info__flexWrapper__column');
    const childrenColumn = screen
      .getByText('Children')
      .closest('.info__flexWrapper__column');
    const residenceColumn = screen
      .getByText('Type Of Residence')
      .closest('.info__flexWrapper__column');

    // Verify that each column has the appropriate class names
    expect(fullNameColumn).toHaveClass('info__flexWrapper__column');
    expect(phoneColumn).toHaveClass('info__flexWrapper__column');
    expect(emailColumn).toHaveClass('info__flexWrapper__column');
    expect(bvnColumn).toHaveClass('info__flexWrapper__column', 'bvn');
    expect(genderColumn).toHaveClass('info__flexWrapper__column');
    expect(maritalStatusColumn).toHaveClass('info__flexWrapper__column');
    expect(childrenColumn).toHaveClass('info__flexWrapper__column', 'children');
    expect(residenceColumn).toHaveClass(
      'info__flexWrapper__column',
      'residence',
    );
  });

  it('renders personal information based on dynamic props', () => {
    const dynamicInfo = {
      fullName: 'John Smith',
      phoneNumber: '555-123-4567',
      email: 'johnsmith@example.com',
      bvn: '0987654321',
      gender: 'Male',
      maritalStatus: 'Married',
      children: 'Two',
      typeOfResidence: 'House',
    };

    render(<PersonalInformation info={dynamicInfo} />);

    // Check if dynamic data is rendered correctly
    expect(screen.getByText(dynamicInfo.fullName)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.email)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.bvn)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.gender)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.maritalStatus)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.children)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.typeOfResidence)).toBeInTheDocument();
  });
});
