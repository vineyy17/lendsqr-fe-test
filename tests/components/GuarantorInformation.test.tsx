import { render, screen } from '@testing-library/react';
import GuarantorInformation from '../../src/components/GuarantorInformation';

// Mock Guarantor data type for testing
const mockGuarantorInfo = {
  fullName: 'John Doe',
  phoneNumber: '123-456-7890',
  email: 'johndoe@example.com',
  relationship: 'Friend',
};

describe('GuarantorInformation', () => {
  it('renders the "Guarantor" heading correctly', () => {
    render(<GuarantorInformation info={mockGuarantorInfo} />);

    // Check if the "Guarantor" heading is rendered correctly
    expect(screen.getByText('Guarantor')).toBeInTheDocument();
  });

  it('renders the guarantor details correctly', () => {
    render(<GuarantorInformation info={mockGuarantorInfo} />);

    // Check if all sections are rendered with their corresponding data
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText(mockGuarantorInfo.fullName)).toBeInTheDocument();

    expect(screen.getByText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText(mockGuarantorInfo.phoneNumber)).toBeInTheDocument();

    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText(mockGuarantorInfo.email)).toBeInTheDocument();

    expect(screen.getByText('Relationship')).toBeInTheDocument();
    expect(
      screen.getByText(mockGuarantorInfo.relationship),
    ).toBeInTheDocument();
  });

  it('applies the correct CSS classes to each section', () => {
    render(<GuarantorInformation info={mockGuarantorInfo} />);

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
    const relationshipColumn = screen
      .getByText('Relationship')
      .closest('.info__flexWrapper__column');

    // Verify that each column has the appropriate class names
    expect(fullNameColumn).toHaveClass('info__flexWrapper__column');
    expect(phoneColumn).toHaveClass('info__flexWrapper__column', 'phone');
    expect(emailColumn).toHaveClass('info__flexWrapper__column', 'email');
    expect(relationshipColumn).toHaveClass('info__flexWrapper__column');
  });

  it('renders guarantor information based on dynamic props', () => {
    const dynamicInfo = {
      fullName: 'Jane Smith',
      phoneNumber: '987-654-3210',
      email: 'janesmith@example.com',
      relationship: 'Colleague',
    };

    render(<GuarantorInformation info={dynamicInfo} />);

    // Check if dynamic data is rendered correctly
    expect(screen.getByText(dynamicInfo.fullName)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.email)).toBeInTheDocument();
    expect(screen.getByText(dynamicInfo.relationship)).toBeInTheDocument();
  });
});
