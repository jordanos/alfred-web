import { apiSlice } from 'store/api/apiSlice';

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginEmail: builder.mutation({
      query: (body) => ({
        url: '/auth/login/',
        method: 'POST',
        body,
      }),
      transformResponse(res: { token: string }) {
        return res;
      },
      invalidatesTags: [],
    }),
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
    loginGithub: builder.mutation({
      query: (body) => ({
        url: '/auth/social/github/',
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

export const {
  useLoginEmailMutation,
  useLoginGoogleMutation,
  useLoginGithubMutation,
} = loginApiSlice;
