import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {PRODUCTS_ACTIONS} from '../../store/store';

interface IProps {}
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type Props = StateProps & DispatchProps & IProps;

const ProductSearch: React.FC<Props> = (props: Props) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={style.container}>
      <TextInput
        style={style.text}
        placeholder="recherche"
        value={props.searchText}
        onChangeText={textValue => {
          setSearchText(textValue);
        }}
      />
      <View style={style.button}>
        <Button
          title="Search"
          onPress={() => {
            props.setSearch(searchText);
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

function mapStateToProps(state: any, own: any) {
  return {searchText: state.datas.search, ...own};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    setSearch: (value: string) =>
      dispatch({type: PRODUCTS_ACTIONS.SET_SEARCH, value: value}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
