import { apiSlice } from 'store/api/apiSlice';

export const socialLoginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginGoogle: builder.mutation({
      query: (body) => ({
        url: '/auth/social/google/',
        method: 'POST',
        body,
      }),
      transformResponse(res: { key: string }) {
        return res;
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useLoginGoogleMutation } = socialLoginApiSlice;
