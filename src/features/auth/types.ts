export type User = {
  firstName: string | null;
  role: string | null;
  isAuth: boolean;
  token: string | null;
  theme: 'dark' | 'light';
};
