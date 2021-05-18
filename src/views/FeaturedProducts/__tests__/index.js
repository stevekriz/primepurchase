import { render, screen } from '@testing-library/react';
import FeaturedProducts from '..';

test('renders featured products header', () => {
  render(<FeaturedProducts />);
  const linkElement = screen.getByText(/Featured Products/i);
  expect(linkElement).toBeInTheDocument();
});
