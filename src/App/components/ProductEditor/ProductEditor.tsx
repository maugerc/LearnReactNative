import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {IProduct} from '../../../Interfaces/ProductProds';
import MyButton from '../Button/Button';
import style from './ProductEditor.style';

interface Props {
  produit: IProduct;
}

const ProductEditor = (props: Props) => {
  const [state, setstate] = useState(props.produit);
  useEffect(() => {
    return () => {};
  }, []);
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
        <MyButton onMyButtonPressedAction={() => undefined} bgColor="skyblue">
          save
        </MyButton>
      </View>
      <View style={style.button}>
        <MyButton onMyButtonPressedAction={() => undefined} bgColor="tomato">
          cancel
        </MyButton>
      </View>
    </ScrollView>
  );
};

export default ProductEditor;
