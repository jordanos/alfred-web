import { createSlice, Slice } from '@reduxjs/toolkit';

type AppType = {
  mobileNav: boolean;
  pageLoading: boolean;
  themeMode: 'light' | 'dark';
};

const initialState: AppType = {
  mobileNav: false,
  pageLoading: true,
  themeMode: 'dark',
};

const appSlice: Slice<AppType> = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNav = !state.mobileNav;
    },
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === 'dark' ? 'light' : 'dark';
    },
    setPageLoading: (state, { payload }) => {
      state.pageLoading = payload;
    },
  },
});

export const { toggleMobileNav, toggleTheme, setPageLoading } = appSlice.actions;
export default appSlice.reducer;
