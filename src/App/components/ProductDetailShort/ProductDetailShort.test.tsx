import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetailShort from './TstCmp';

describe('<TstCmp />', () => {
  test('it should mount', () => {
    render(<ProductDetailShort />);

    const ProductDetailShort = screen.getByTestId('ProductDetailShort');

    expect(ProductDetailShort).toBeInTheDocument();
  });
});
