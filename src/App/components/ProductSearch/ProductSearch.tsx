import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Props} from './ProductSearch.props';

const ProductSearch: React.FC<Props> = (props: Props) => {
  const [state, setState] = useState('');

  return (
    <View style={style.container}>
      <TextInput
        style={style.text}
        placeholder="recherche"
        value={state}
        onChangeText={textValue => {
          setState(textValue);
        }}
      />
      <View style={style.button}>
        <Button
          title="Search"
          onPress={() => {
            props.onChangeText(state);
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    paddingHorizontal: 5,
  },
  text: {
    width: '80%',
  },
  button: {},
});

export default ProductSearch;
