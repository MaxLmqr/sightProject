import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {RootStackParamList} from '../navigator/RootStackParam';
import {login} from '../services/auth.service';
import AuthSlice from '../store/slices/auth.slice';

type authNavigatorProp = StackNavigationProp<RootStackParamList>;

export const useLogin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLoginClick = () => {
    login(email, password)
      .then(res => {
        if (res.statusCode === 401) {
          setError('Wrong credentials.');
          throw new Error('Wrong credentials');
        }
        if (res.access_token) {
          dispatch(AuthSlice.actions.setToken(res.access_token));
        }
      })
      .catch(err => console.log(err));
  };

  return {handleLoginClick, email, setEmail, password, setPassword, error, setError};
};
