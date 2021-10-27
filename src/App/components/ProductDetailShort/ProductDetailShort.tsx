import React from 'react';
import PropsTypes from 'prop-types';
import {View, Text, Image, Button} from 'react-native';
import style from './ProductDetailShort.style';

function ProductDetailShort(props: any) {
  return (
    <View style={style.ProductDetailShort} testID="ProductDetailShort">
      <View>
        <Text>Action :</Text>
        <Button
          title="close"
          color="lightblue"
          onPress={() => {
            props.action.close();
          }}
        />
        <Button title="Edit" color="orange" />
        <Button
          title="Add"
          color="lightgreen"
          onPress={() => {
            props.action.add();
          }}
        />
      </View>
      <View>
        <Image
          source={{uri: props.product.img}}
          style={style.leftImage}
          resizeMode="center"
        />
      </View>
      <View>
        <Text>{props.product.name}</Text>
        <Text>Description</Text>
        <Text>{props.product.description}</Text>
        <Text>{props.product.price}</Text>
      </View>
    </View>
  );
}

ProductDetailShort.propsType = {
  product: PropsTypes.object.isRequired,
};

ProductDetailShort.defaultProps = {};

export default ProductDetailShort;
