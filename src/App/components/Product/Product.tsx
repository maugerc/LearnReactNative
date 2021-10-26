import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {IProduct} from '../../../interfaces/ProductProds';

interface Props {
  product: IProduct;
}

const Product: React.FC<Props> = props => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image source={{uri: props.product.imgSrc}} style={styles.imgSize} />
        <Text>{props.product.name}</Text>
        <Text style={styles.price}>{props.product.price}$</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10,
    borderColor: 'mediumblue',
    borderWidth: 3,
  },
  imgSize: {
    width: 150,
    height: 100,
  },
  price: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Product;
