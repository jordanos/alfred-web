import { createSlice, Slice } from '@reduxjs/toolkit';
import { LocalUser } from './types';

const localUser: LocalUser = {
  firstName: null,
  role: null,
  isAuth: false,
  token: null,
};

const authSlice: Slice<LocalUser> = createSlice({
  name: 'auth',
  initialState: localUser,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.role = payload.role;
      state.isAuth = payload.isAuth;
      state.token = payload.token;
    },

    logout: (state) => {
      state.firstName = null;
      state.role = null;
      state.isAuth = false;
      state.token = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
