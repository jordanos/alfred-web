import { createSlice, Slice } from '@reduxjs/toolkit';
import { User } from './types';

const initUser: User = {
  firstName: null,
  role: null,
  isAuth: false,
  token: null,
  theme: 'dark',
};

const userSlice: Slice<User> = createSlice({
  name: 'user',
  initialState: initUser,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.role = payload.role;
      state.isAuth = payload.isAuth;
      state.token = payload.token;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    logout: (state) => {
      state.firstName = null;
      state.role = null;
      state.isAuth = false;
      state.token = null;
    },
  },
});

export const { setCredentials, toggleTheme, logout } = userSlice.actions;
export default userSlice.reducer;
