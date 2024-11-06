import { render, screen } from '@testing-library/react';
import SocialsInformation from '../../src/components/SocialsInformation';

// Mock Socials data type for testing
const mockSocialsInfo = {
  twitter: 'https://twitter.com/username',
  facebook: 'https://facebook.com/username',
  instagram: 'https://instagram.com/username',
};

describe('SocialsInformation', () => {
  it('renders the "Socials" heading correctly', () => {
    render(<SocialsInformation info={mockSocialsInfo} />);

    // Check if the "Socials" heading is rendered correctly
    expect(screen.getByText('Socials')).toBeInTheDocument();
  });

  it('renders the social media information correctly', () => {
    render(<SocialsInformation info={mockSocialsInfo} />);

    // Check if the Twitter, Facebook, and Instagram sections are rendered
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();

    // Check if the social media URLs (mocked values) are rendered correctly
    expect(screen.getByText(mockSocialsInfo.twitter)).toBeInTheDocument();
    expect(screen.getByText(mockSocialsInfo.facebook)).toBeInTheDocument();
    expect(screen.getByText(mockSocialsInfo.instagram)).toBeInTheDocument();
  });

  it('applies the correct CSS classes to social media sections', () => {
    render(<SocialsInformation info={mockSocialsInfo} />);

    // Check if the correct classes are applied to the columns
    const twitterColumn = screen
      .getByText('Twitter')
      .closest('.info__flexWrapper__column');
    const facebookColumn = screen
      .getByText('Facebook')
      .closest('.info__flexWrapper__column');
    const instagramColumn = screen
      .getByText('Instagram')
      .closest('.info__flexWrapper__column');

    // Verify classes for each section
    expect(twitterColumn).toHaveClass('info__flexWrapper__column');
    expect(facebookColumn).toHaveClass('info__flexWrapper__column');
    expect(instagramColumn).toHaveClass(
      'info__flexWrapper__column',
      'sector',
      'instagram',
    );
  });

  it('renders social media information based on dynamic props', () => {
    const dynamicSocials = {
      twitter: 'https://twitter.com/anotheruser',
      facebook: 'https://facebook.com/anotheruser',
      instagram: 'https://instagram.com/anotheruser',
    };

    render(<SocialsInformation info={dynamicSocials} />);

    // Check if dynamic data is rendered correctly
    expect(screen.getByText(dynamicSocials.twitter)).toBeInTheDocument();
    expect(screen.getByText(dynamicSocials.facebook)).toBeInTheDocument();
    expect(screen.getByText(dynamicSocials.instagram)).toBeInTheDocument();
  });
});
