import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IProduct} from '../../../Interfaces/ProductProds';
import Product from '../Product/Product';

interface Props {
  products: IProduct[];
}

const ProductList: React.FC<Props> = (props: Props) => {
  return (
    <View style={style.listContainer}>
      {props.products.map((e, i) => (
        <Product product={e} key={'prod-' + e.id} />
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default ProductList;
