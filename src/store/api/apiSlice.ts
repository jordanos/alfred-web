import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/dist/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'constants/api';
import { logout } from 'features/auth/authSlice';

const noAuthEndpoints = ['login'];

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { endpoint }) => {
    const user = window.localStorage?.getItem('user');
    const token = user ? JSON.parse(user)?.token : null;
    if (token && !noAuthEndpoints.includes(endpoint)) {
      headers.set('Authorization', `Token ${token}`);
    } else {
      headers.delete('Authorization');
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraOptions: any
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    api.dispatch(logout({}));
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: () => ({}),
});
