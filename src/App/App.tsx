/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {ProductProps} from './components/Product/ProductProds';
import ProductList from './components/ProductList/ProductList';
import ProductSearch from './components/ProductSearch/ProductSearch';

const initialState: ProductProps[] = [
  {
    id: 1,
    name: 'Pass saison Grand massif',
    price: 300,
    imgSrc: 'https://picsum.photos/id/684/600/400',
  },
  {
    id: 2,
    name: 'Pass saison Les Gets',
    price: 500,
    imgSrc: 'https://picsum.photos/id/685/600/400',
  },
  {
    id: 3,
    name: 'Pass saison Sommand',
    price: 200,
    imgSrc: 'https://picsum.photos/id/682/600/400',
  },
];

const App = () => {
  const [products, setProducts] = useState(initialState);
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ProductSearch
        onChangeText={(value: string) => {
          setProducts(initialState.filter(p => p.name.includes(value)));
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductList products={products} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
