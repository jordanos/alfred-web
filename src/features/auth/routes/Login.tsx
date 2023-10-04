import {
  GITHUB_CLIENT_ID,
  GITHUB_SECRET,
  GOOGLE_CLIENT_ID,
} from 'constants/creds';
import { FC, useState } from 'react';
import {
  IResolveParams,
  LoginSocialGithub,
  LoginSocialGoogle,
} from 'reactjs-social-login';

// CUSTOMIZE ANY UI BUTTON
import { toast } from 'components/Toast';
import LoadingFullscreen from 'components/widgets/LoadingFullscreen';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  GithubLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import {
  useLoginGithubMutation,
  useLoginGoogleMutation,
} from '../api/socialLoginApiSlice';
import AuthWrapper from '../components/AuthWrapper';
import { setAuth } from '../userSlice';

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginGoogle] = useLoginGoogleMutation<{ data: { key: string } }>();
  const [loginGithub] = useLoginGithubMutation<{ data: { key: string } }>();

  const handleLoginError = () => {
    setIsLoading(false);
    toast({
      message: 'Login error, Please try again.',
      severity: 'error',
    });
  };

  const handleLogin = (token: string) => {
    // set user token in redux store
    // redirect to dashboard
    if (!token) {
      handleLoginError();
      return;
    }
    dispatch(setAuth({ token, isAuth: true }));
    setIsLoading(false);
    navigate('/');
  };

  return (
    <AuthWrapper>
      {isLoading && <LoadingFullscreen />}
      <LoginSocialGoogle
        isOnlyGetToken
        client_id={GOOGLE_CLIENT_ID}
        typeResponse="idToken"
        onLoginStart={() => setIsLoading(true)}
        onResolve={async ({ data }: IResolveParams) => {
          try {
            const res = await loginGoogle({
              access_token: data?.credential,
            }).unwrap();
            handleLogin(res.key);
          } catch (e) {
            handleLoginError();
          }
        }}
        onReject={() => {
          handleLoginError();
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
      <LoginSocialGithub
        isOnlyGetToken
        client_id={GITHUB_CLIENT_ID}
        client_secret={GITHUB_SECRET}
        scope="user:email,"
        redirect_uri="http://localhost:3000/auth/login"
        onLoginStart={() => setIsLoading(true)}
        onResolve={async ({ data }: IResolveParams) => {
          try {
            const res = await loginGithub({
              access_token: data?.access_token,
            }).unwrap();
            handleLogin(res.key);
          } catch (e) {
            handleLoginError();
          }
        }}
        onReject={() => {
          handleLoginError();
        }}
      >
        <GithubLoginButton />
      </LoginSocialGithub>
    </AuthWrapper>
  );
};

export default Login;
