import { apiSlice } from 'store/api/apiSlice';

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/registration/',
        method: 'POST',
        body,
      }),
      transformResponse(res: { token: string }) {
        return res;
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useRegisterMutation } = registerApiSlice;
