/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {connect} from 'react-redux';

type StateProps = ReturnType<typeof mapStateToProps>;
type Props = StateProps;

const App = (props: Props) => {
  return props.window;
};

const mapStateToProps = (state: any, own: any) => {
  return {window: state.nav.window, ...own};
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
