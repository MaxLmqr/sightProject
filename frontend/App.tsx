/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Store} from './src/store/configure.store';
import {Provider} from 'react-redux';
import {RootNavigator} from './src/navigator/root.navigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={Store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
