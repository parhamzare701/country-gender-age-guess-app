import { render, screen } from '@testing-library/react';
import use from './App';

test('renders learn react link', () => {
  render(<use />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
