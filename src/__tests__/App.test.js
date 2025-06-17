import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders the navbar brand', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const brandLink = screen.getByRole('link', { name: /Nobos Software/i });
  expect(brandLink).toBeInTheDocument();
});
