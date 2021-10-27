import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Lear React Native App</Text>
      <View style={style.buttons}>
        <TouchableOpacity>
          <View style={style.button}>
            <Image source={require('../../img/menu.png')} style={style.image} />
            <Text>List produits</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.button}>
            <Image source={require('../../img/pen.png')} style={style.image} />
            <Text>Editer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
    textDecorationLine: 'underline',
  },
  buttons: {
    marginTop: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
});

export default Main;
