import { createSlice, Slice } from '@reduxjs/toolkit';

type AppType = {
  mobileNav: boolean;
  pageLoading: boolean;
  redirectPath: string | null;
};

const initialState: AppType = {
  mobileNav: false,
  pageLoading: true,
  redirectPath: null,
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
    setRedirect: (state, { payload }) => {
      state.redirectPath = payload.redirectPath;
    },
  },
});

export const { toggleMobileNav, setPageLoading, setRedirect } = appSlice.actions;
export default appSlice.reducer;
