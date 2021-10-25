import React from 'react';
import {Text, View} from 'react-native';

interface Props{
  text: string;
}

const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Button;
