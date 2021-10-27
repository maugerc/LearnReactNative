import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {IProduct} from '../../../Interfaces/ProductProds';
import Product from '../Product/Product';

interface IProps {}
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type Props = StateProps & DispatchProps & IProps;

const ProductList: React.FC<Props> = (props: Props) => {
  return (
    <ScrollView>
      <View style={style.listContainer}>
        {props.products.map((e: IProduct) => (
          <Product product={e} key={'prod-' + e.id} />
        ))}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

function mapStateToProps(state: any, own: any) {
  return {products: state.datas.filteredProducts, ...own};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
