import { render, screen } from '@testing-library/react';
import FloatingReviews from './FloatingReviews';

describe('FloatingReviews', () => {
  test('renders a reviewer name snippet', () => {
    render(<FloatingReviews />);
    // Expect at least one known reviewer to appear
    expect(screen.getByText(/Jennifer Rocha|Yanet Teshager|Yuele Tesfalem/i)).toBeInTheDocument();
  });
});
