import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from '../../src/pages/PageNotFound';

describe('PageNotFound', () => {
  it('renders the Page Not Found message', () => {
    render(
      <Router>
        <PageNotFound />
      </Router>,
    );

    // Check if the "Page not found 😢" text is rendered
    const notFoundText = screen.getByText(/Page not found 😢/i);
    expect(notFoundText).toBeInTheDocument();
  });

  it('renders the "Go back" button', () => {
    render(
      <Router>
        <PageNotFound />
      </Router>,
    );

    // Check if the "Go back" button is rendered
    const goBackButton = screen.getByText(/Go back/i);
    expect(goBackButton).toBeInTheDocument();
  });
});
