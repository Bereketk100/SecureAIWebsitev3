import { render, screen } from '@testing-library/react';
import GoogleReviews from './GoogleReviews';

describe('GoogleReviews component', () => {
  test('shows rating summary and heading', () => {
    render(<GoogleReviews />);
    expect(screen.getByText(/5.0/i)).toBeInTheDocument();
    expect(screen.getByText(/What Clients Say/i)).toBeInTheDocument();
  });

  test('renders a specific reviewer name', () => {
    render(<GoogleReviews />);
    expect(screen.getByText(/Jennifer Rocha/i)).toBeInTheDocument();
  });
});
