import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {Props} from './Props';
import PropTypes from 'prop-types';

const Button: React.FC<Props> = props => {
  console.log(props);
  return (
    <TouchableHighlight
      onPress={() => {
        props.onMyButtonPressedAction('test');
      }}>
      <View style={{...styles.container, backgroundColor: props.bgColor}}>
        {props.children}
      </View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
};

Button.defaultProps = {
  bgColor: 'skyblue',
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
