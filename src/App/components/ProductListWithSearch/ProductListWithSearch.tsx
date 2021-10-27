import React from 'react';
import ProductList from '../ProductList/ProductList';
import ProductSearch from '../ProductSearch/ProductSearch';

const ProductListWithSearch = () => {
  return (
    <>
      <ProductSearch />
      <ProductList />
    </>
  );
};

export default ProductListWithSearch;
