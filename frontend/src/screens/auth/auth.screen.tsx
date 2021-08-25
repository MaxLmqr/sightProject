import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {RootStackParamList} from '../../navigator/RootStackParam';

type authNavigatorProp = StackNavigationProp<RootStackParamList>;

export const AuthScreen = () => {
  const navigation = useNavigation<authNavigatorProp>();
  return (
    <View style={styles.container}>
      <Text> Authentication </Text>
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
