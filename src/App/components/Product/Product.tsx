import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import {IProduct} from '../../../Interfaces/ProductProds';
import ProductEditor from '../ProductEditor/ProductEditor';

interface IProps {
  product: IProduct;
}
interface DispatchProps {
  gotoEditor: Function;
}
type Props = DispatchProps & IProps;

const Product: React.FC<Props> = props => {
  return (
    <TouchableHighlight
      onPress={() => {
        props.gotoEditor(props.product);
      }}>
      <View style={styles.container}>
        <Image source={{uri: props.product.imgSrc}} style={styles.imgSize} />
        <Text>{props.product.name}</Text>
        <Text style={styles.price}>{props.product.price} CHF</Text>
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
    width: 160,
    height: 100,
    resizeMode: 'stretch',
  },
  price: {
    fontSize: 16,
    marginTop: 10,
  },
});

const mapStateToProps = (state: any, own: any) => {
  return {...own, ...state};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    gotoEditor: (product: IProduct) =>
      dispatch({
        type: 'SET_WINDOW',
        value: <ProductEditor product={product} />,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
