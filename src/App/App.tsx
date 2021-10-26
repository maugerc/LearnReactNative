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
import {IProduct} from '../interfaces/ProductProds';
import ProductList from './components/ProductList/ProductList';
import ProductSearch from './components/ProductSearch/ProductSearch';

const initialState: IProduct[] = new Array<IProduct>();

const App = () => {
  const [products, setProducts] = useState(initialState);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    setProducts(
      initialState.filter(p =>
        p.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
      ),
    );
  }, [searchText]);
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ProductSearch
        onChangeText={(value: string) => {
          setSearchText(value);
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductList products={products} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
