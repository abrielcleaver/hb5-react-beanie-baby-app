import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current page text', () => {
  render(<App />);
  const currentPage = screen.getByText(/current page/i);
  expect(currentPage).toBeInTheDocument();
});
