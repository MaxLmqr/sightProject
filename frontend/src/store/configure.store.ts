import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {persistCombineReducers} from 'redux-persist';
import AuthSlice from './slices/auth.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const Store = createStore(
  persistCombineReducers(persistConfig, {
    authStore: AuthSlice.reducer,
  }),
);

export type State = ReturnType<typeof Store.getState>;
