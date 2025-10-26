import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name SECUREAI', () => {
  render(<App />);
  expect(screen.getAllByText(/SECUREAI/i)[0]).toBeInTheDocument();
});
