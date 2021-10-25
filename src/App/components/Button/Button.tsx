import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Props} from './Props';

const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    padding: 20,
    marginTop: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: 'mediumblue',
    borderWidth: 3,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Button;
