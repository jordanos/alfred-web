import { createSlice, Slice } from '@reduxjs/toolkit';

type RedirectPath = {
  redirectPath: string | null;
};

const initialState: RedirectPath = {
  redirectPath: null,
};

const routingSlice: Slice<RedirectPath> = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    setRedirect: (state, { payload }) => {
      state.redirectPath = payload.redirectPath;
    },
  },
});

export const { setRedirect } = routingSlice.actions;
export default routingSlice.reducer;
