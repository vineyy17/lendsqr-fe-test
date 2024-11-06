import { render, screen } from '@testing-library/react';
import EducationInformation from '../../src/components/EducationInformation';

// Mock Education and Employment data type for testing
const mockEducationEmploymentInfo = {
  levelOfEducation: 'Bachelor of Science',
  employmentStatus: 'Employed',
  sectorOfEmployment: 'Software Engineering',
  durationOfEmployment: '3 years',
  officeEmail: 'user@example.com',
  monthlyIncome: '$5000',
  loanRepayment: '$200',
};

describe('EducationInformation', () => {
  it('renders the "Education and Employment" heading correctly', () => {
    render(<EducationInformation info={mockEducationEmploymentInfo} />);

    // Check if the "Education and Employment" heading is rendered correctly
    expect(screen.getByText('Education and Employment')).toBeInTheDocument();
  });

  it('renders the education and employment details correctly', () => {
    render(<EducationInformation info={mockEducationEmploymentInfo} />);

    // Check if all sections are rendered with their corresponding data
    expect(screen.getByText('level of education')).toBeInTheDocument();
    expect(
      screen.getByText(mockEducationEmploymentInfo.levelOfEducation),
    ).toBeInTheDocument();

    expect(screen.getByText('employment status')).toBeInTheDocument();
    expect(
      screen.getByText(mockEducationEmploymentInfo.employmentStatus),
    ).toBeInTheDocument();

    expect(screen.getByText('sector of employment')).toBeInTheDocument();
    expect(
      screen.getByText(mockEducationEmploymentInfo.sectorOfEmployment),
    ).toBeInTheDocument();

    expect(screen.getByText('Duration of employment')).toBeInTheDocument();
    expect(
      screen.getByText(mockEducationEmploymentInfo.durationOfEmployment),
    ).toBeInTheDocument();

    expect(screen.getByText('office email')).toBeInTheDocument();
    expect(
      screen.getByText(mockEducationEmploymentInfo.officeEmail),
    ).toBeInTheDocument();

    expect(screen.getByText('Monthly income')).toBeInTheDocument();
    expect(
      screen.getByText(mockEducationEmploymentInfo.monthlyIncome),
    ).toBeInTheDocument();

    expect(screen.getByText('loan repayment')).toBeInTheDocument();
    expect(
      screen.getByText(mockEducationEmploymentInfo.loanRepayment),
    ).toBeInTheDocument();
  });

  it('applies the correct CSS classes to each section', () => {
    render(<EducationInformation info={mockEducationEmploymentInfo} />);

    // Check if the correct classes are applied to each column
    const educationColumn = screen
      .getByText('level of education')
      .closest('.info__flexWrapper__column');
    const employmentStatusColumn = screen
      .getByText('employment status')
      .closest('.info__flexWrapper__column');
    const sectorColumn = screen
      .getByText('sector of employment')
      .closest('.info__flexWrapper__column');
    const durationColumn = screen
      .getByText('Duration of employment')
      .closest('.info__flexWrapper__column');
    const emailColumn = screen
      .getByText('office email')
      .closest('.info__flexWrapper__column');
    const incomeColumn = screen
      .getByText('Monthly income')
      .closest('.info__flexWrapper__column');
    const loanColumn = screen
      .getByText('loan repayment')
      .closest('.info__flexWrapper__column');

    // Verify that each column has the appropriate class names
    expect(educationColumn).toHaveClass('info__flexWrapper__column');
    expect(employmentStatusColumn).toHaveClass(
      'info__flexWrapper__column',
      'status',
    );
    expect(sectorColumn).toHaveClass('info__flexWrapper__column', 'sector');
    expect(durationColumn).toHaveClass('info__flexWrapper__column', 'duration');
    expect(emailColumn).toHaveClass('info__flexWrapper__column', 'officeEmail');
    expect(incomeColumn).toHaveClass('info__flexWrapper__column', 'income');
    expect(loanColumn).toHaveClass('info__flexWrapper__column', 'children');
  });

  it('renders education and employment information based on dynamic props', () => {
    const dynamicInfo = {
      levelOfEducation: 'Master of Science',
      employmentStatus: 'Self-employed',
      sectorOfEmployment: 'Freelance',
      durationOfEmployment: '5 years',
      officeEmail: 'freelancer@example.com',
      monthlyIncome: '$8000',
      loanRepayment: '$300',
    };

    render(<EducationInformation info={dynamicInfo} />);

    // Check if dynamic data is rendered correctly
    expect(screen.getByText(dynamicInfo.levelOfEducation)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.employmentStatus)).toBeInTheDocument();
    expect(
      screen.getByText(dynamicInfo.sectorOfEmployment),
    ).toBeInTheDocument();
    expect(
      screen.getByText(dynamicInfo.durationOfEmployment),
    ).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.officeEmail)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.monthlyIncome)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.loanRepayment)).toBeInTheDocument();
  });
});
