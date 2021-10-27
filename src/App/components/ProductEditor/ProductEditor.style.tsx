import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {alignItems: 'center'},
  title: {
    fontSize: 18,
    fontWeight: '900',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  button: {
    marginTop: 5,
  },
});
