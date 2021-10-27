import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import App from '../../App';
import {store} from '../../store/store';

interface Props {}

const NavApp: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaView>
  );
};

export default NavApp;
