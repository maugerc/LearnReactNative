import React, {useState} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {IProduct} from '../../../Interfaces/ProductProds';
import {PRODUCTS_ACTIONS} from '../../store/store';
import MyButton from '../Button/Button';
import Main from '../Main/Main';
import style from './ProductEditor.style';

interface IProps {
  product: IProduct;
}
interface Dispatch {
  gotoHome: Function;
  saveProduct: Function;
}
type Props = Dispatch & IProps;

const ProductEditor = (props: Props) => {
  const [state, setstate] = useState(props.product);
  // useEffect(() => {
  //   return () => {};
  // }, []);
  return (
    <ScrollView>
      <View style={style.container}>
        <Text>{JSON.stringify(state)}</Text>
        <Text style={style.title}>Edition Produit</Text>
        <View style={style.imgContainer}>
          <Image source={{uri: state.imgSrc}} style={style.img} />
          <TextInput
            value={state.imgSrc}
            onChangeText={t => {
              setstate({...state, imgSrc: t});
            }}
            placeholder="url de l'image"
          />
        </View>
        {state.id ? (
          <View>
            <Text>ID : {state.id}</Text>
          </View>
        ) : null}
        <View>
          <Text>nom</Text>
          <TextInput
            value={state.name}
            onChangeText={text => {
              setstate({...state, name: text});
            }}
          />
        </View>
        <View>
          <Text>Prix</Text>
          <TextInput
            value={String(state.price)}
            onChangeText={text => {
              setstate({...state, price: parseFloat(text)});
            }}
          />
        </View>
        <View>
          <Text>description</Text>
          <TextInput
            multiline={true}
            value={state.description ? state.description : ''}
            onChangeText={text => {
              setstate({...state, description: text});
            }}
          />
        </View>
      </View>
      <View style={style.button}>
        <MyButton
          onMyButtonPressedAction={() => {
            props.saveProduct(state);
          }}
          bgColor="skyblue">
          <Text>save</Text>
        </MyButton>
      </View>
      <View style={style.button}>
        <MyButton
          onMyButtonPressedAction={() => {
            props.gotoHome();
          }}
          bgColor="tomato">
          <Text>cancel</Text>
        </MyButton>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: any, own: any) => {
  return own;
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    gotoHome: () =>
      dispatch({
        type: 'SET_WINDOW',
        value: <Main />,
      }),
    saveProduct: (product: IProduct) =>
      dispatch({
        type: PRODUCTS_ACTIONS.SAVE_PRODUCT,
        value: product,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);
