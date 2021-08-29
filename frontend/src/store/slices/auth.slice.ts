import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userId: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    setUserId: (state, action) => ({
      ...state,
      userId: action.payload,
    }),
    reset: state => ({
      ...state,
      token: null,
      userId: null,
    }),
  },
});

export default AuthSlice;
