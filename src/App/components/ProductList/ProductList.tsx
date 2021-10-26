import React from 'react';
import {View} from 'react-native';
import Product from '../Product/Product';
import {Props} from './ProductList.props';

const ProductList: React.FC<Props> = (props: Props) => {
  return (
    <View>
      {props.products.map((e, i) => (
        <Product
          imgSrc={e.imgSrc}
          name={e.name}
          price={e.price}
          key={'prod-' + e.id}
        />
      ))}
    </View>
  );
};

export default ProductList;
