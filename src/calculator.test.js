import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './calculator';

test('renders learn react link', () => {
  const { getByText } = render(<Calculator />);
  const linkElement = getByText(/C/i);
  expect(linkElement).toBeInTheDocument();
});
