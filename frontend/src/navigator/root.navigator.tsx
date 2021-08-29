import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigator} from './main.navigator';
import {LoginNavigator} from './login.navigator';
import {State} from '../store/configure.store';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const token = useSelector((state: State) => state.authStore.token);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginNavigator} />
      )}
    </Stack.Navigator>
  );
};
