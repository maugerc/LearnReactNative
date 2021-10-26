/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Button from './components/Button/Button';

const App = () => {
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello world</Text>
          <Button bgColor="orange">
            <View>
              <Text>Benjamin le button</Text>
            </View>
          </Button>
          <Button>
            <View>
              <Text>Benjamin le button</Text>
            </View>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
