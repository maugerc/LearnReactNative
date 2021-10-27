import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import PropTypes from 'prop-types';
import store from '../reducers/reducer';

export default function Login(props) {
  const [logstate, setlogstate] = useState({login: 'Alex', pass: 'alex'});
  return (
    <View style={styles.mainView}>
      <View>
        <Image style={styles.image} source={require('../../img/coop.png')} />
      </View>
      <View style={styles.container}>
        <Text>Authentification</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Login"
          value={logstate.login}
          onChangeText={text => {
            setlogstate({...logstate, login: text});
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="password"
          secureTextEntry={true}
          value={logstate.pass}
          onChangeText={text => {
            setlogstate({...logstate, pass: text});
          }}
        />
        <Button
          title="Connexion"
          onPress={() => {
            store.dispatch({
              type: 'LOGIN',
              value: {login: logstate.login, password: logstate.pass},
            });
          }}
        />
      </View>
      <Text>logstate:{JSON.stringify(logstate)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'skyblue',
    paddingBottom: '30%',
    paddingTop: 15,
    height: '100%',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  inputs: {
    marginBottom: 20,
  },
});

Login.propsTypes = {
  onAuthentPress: PropTypes.func.isRequired,
};
