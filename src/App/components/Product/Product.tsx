import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {ProductProps} from './ProductProds';

const Product: React.FC<ProductProps> = props => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image source={{uri: props.imgSrc}} style={styles.imgSize} />
        <Text>{props.name}</Text>
        <Text style={styles.price}>{props.price}$</Text>
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
    width: 300,
    height: 200,
  },
  price: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Product;
