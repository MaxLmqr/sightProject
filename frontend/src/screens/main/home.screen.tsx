import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import AuthSlice from '../../store/slices/auth.slice';
import {styles} from './styles';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title={'Logout'} onPress={() => dispatch(AuthSlice.actions.reset())} />
    </View>
  );
};
