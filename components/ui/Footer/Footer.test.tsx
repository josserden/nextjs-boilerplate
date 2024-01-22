import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  test('renders footer with actual year', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();

    const fullYear = new Date().getFullYear();
    const expectedText = `${fullYear}`;
    expect(footerElement).toHaveTextContent(expectedText);
  });
});
