import { createSlice, Slice } from '@reduxjs/toolkit';

type AppType = {
  mobileNav: boolean;
  pageLoading: boolean;
};

const initialState: AppType = {
  mobileNav: false,
  pageLoading: true,
};

const appSlice: Slice<AppType> = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNav = !state.mobileNav;
    },
    setPageLoading: (state, { payload }) => {
      state.pageLoading = payload;
    },
  },
});

export const { toggleMobileNav, setPageLoading } = appSlice.actions;
export default appSlice.reducer;
