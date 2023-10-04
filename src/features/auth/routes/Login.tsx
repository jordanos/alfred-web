import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { toast } from 'components/Toast';
import { GOOGLE_CLIENT_ID } from 'constants/creds';
import { FC, useEffect, useState } from 'react';
import { useLoginGoogleMutation } from '../api/socialLoginApiSlice';
import AuthWrapper from '../components/AuthWrapper';

const Login: FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loginGoogle] = useLoginGoogleMutation<{ data: { key: string } }>();

  useEffect(() => {
    if (token) {
      // set user token in redux store
      // redirect to dashboard
    }
  }, [token]);

  return (
    <AuthWrapper>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            try {
              const res = await loginGoogle({
                access_token: credentialResponse.credential,
              }).unwrap();

              setToken(res.key);
            } catch (e) {
              console.log(e);
            }
          }}
          onError={() => {
            toast({ message: 'Login failed', severity: 'error' });
          }}
        />
      </GoogleOAuthProvider>
    </AuthWrapper>
  );
};

export default Login;
