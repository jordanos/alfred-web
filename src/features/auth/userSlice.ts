import { createSlice, Slice } from '@reduxjs/toolkit';
import { User } from './types';

const initUser: User = {
  isAuth: false,
  token: null,
  theme: 'dark',
};

const userSlice: Slice<User> = createSlice({
  name: 'user',
  initialState: initUser,
  reducers: {
    setAuth: (state, { payload }) => {
      console.log('p', payload);
      state.isAuth = payload.isAuth;
      state.token = payload.token;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
    },
  },
});

export const { setAuth, toggleTheme, logout } = userSlice.actions;
export default userSlice.reducer;
