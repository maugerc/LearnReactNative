/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {IProduct} from '../Interfaces/ProductProds';
import ProductList from './components/ProductList/ProductList';
import ProductSearch from './components/ProductSearch/ProductSearch';
import {ADR_REST, RESOURCES_NAME} from './config/config';

const initialState: IProduct[] = new Array<IProduct>();

const App = () => {
  const [products, setProducts] = useState(initialState);
  const [filteredProducts, setFilteredProducts] = useState(initialState);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilteredProducts(
      products.filter(p =>
        p.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
      ),
    );
  }, [products, searchText]);

  useEffect(() => {
    fetch(`${ADR_REST}${RESOURCES_NAME.products}`)
      .then(f => f.json())
      .then(a => setProducts(a));
  }, []);

  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ProductSearch
        onChangeText={(value: string) => {
          setSearchText(value);
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductList products={filteredProducts} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
