import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useLogin} from '../../hooks/useLogin';
import {colors} from '../../styles/colors.style';
import styled from 'styled-components/native';

const ScreenTitle = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.View`
  flex: 1;
  justify-content: center;
`;

export const AuthScreen = () => {
  const {handleLoginClick, email, setEmail, password, setPassword, error} = useLogin();

  return (
    <View style={styles.container}>
      <ScreenTitle>
        <Text style={styles.title}> Authentication </Text>
      </ScreenTitle>
      <LoginForm>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        <Button
          title="Login"
          onPress={() => {
            handleLoginClick();
          }}
        />
      </LoginForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    backgroundColor: colors.white,
    marginVertical: 10,
    borderRadius: 4,
    padding: 10,
  },
  errorText: {
    color: colors.red,
    marginBottom: 10,
  },
});
