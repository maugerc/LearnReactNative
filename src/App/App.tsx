/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Provider} from 'react-redux';
import ProductList from './components/ProductList/ProductList';
import ProductSearch from './components/ProductSearch/ProductSearch';
import {store} from './store/store';

const App = () => {
  // console.log(store);
  // const [products, setProducts] = useState(initialState);
  // const [filteredProducts, setFilteredProducts] = useState(initialState);
  // const [searchText, setSearchText] = useState('');

  // useEffect(() => {
  //   setFilteredProducts(
  //     products.filter(p =>
  //       p.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  //     ),
  //   );
  // }, [products, searchText]);

  // useEffect(() => {
  //   fetch(`${ADR_REST}${RESOURCES_NAME.products}`)
  //     .then(f => f.json())
  //     .then(a => setProducts(a));
  // }, []);

  return (
    <Provider store={store}>
      <SafeAreaView>
        {/* <StatusBar /> */}
        <ProductSearch />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ProductList />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
