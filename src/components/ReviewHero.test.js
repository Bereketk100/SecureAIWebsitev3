import { render, screen } from '@testing-library/react';
import ReviewHero from './ReviewHero';

describe('ReviewHero', () => {
  test('renders brand and rating', () => {
    render(<ReviewHero />);
  expect(screen.getAllByText(/SECUREAI/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/5.0/i)).toBeInTheDocument();
  });

  test('shows at least one reviewer name initially', () => {
    render(<ReviewHero />);
    expect(screen.getByText(/Jennifer Rocha/i)).toBeInTheDocument();
  });
});
