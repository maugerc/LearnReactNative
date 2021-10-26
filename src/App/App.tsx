/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Button from './components/Button/Button';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Valeur du compteur : {counter}</Text>
        </View>
        <View>
          <Text>Hello world</Text>
          <Button
            bgColor="orange"
            onMyButtonPressedAction={() => {
              setCounter(counter + 1);
              console.log(counter);
            }}>
            <View>
              <Text>Ajouter 1</Text>
            </View>
          </Button>
          <Button
            onMyButtonPressedAction={() => {
              setCounter(counter - 1);
              console.log(counter);
            }}>
            <View>
              <Text>Soustraire 1</Text>
            </View>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
