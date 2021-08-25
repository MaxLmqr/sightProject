import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParam';
import {AuthScreen} from '../screens/auth/auth.screen';

const Stack = createNativeStackNavigator();
type authNavigatorProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={AuthScreen} />
    </Stack.Navigator>
  );
};
