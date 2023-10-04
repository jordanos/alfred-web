import { Box, Link, Typography } from '@mui/material';
import CustomForm, {
  FormField,
  OnSubmitProps,
} from 'components/form/CustomForm';
import { FC } from 'react';
import { z } from 'zod';
import { useLoginEmailMutation } from '../api/loginApiSlice';

interface Props {
  handleLogin: Function;
  handleLoginError: Function;
}

const EmailLoginForm: FC<Props> = ({ handleLogin, handleLoginError }) => {
  const [login, { isLoading }] = useLoginEmailMutation();

  const fields: FormField[] = [
    {
      fieldType: 'Text',
      required: true,
      name: 'email',
      label: 'Email',
      type: 'email',
      initValue: '',
      validation: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Type must be email.' }),
    },
    {
      fieldType: 'Text',
      required: true,
      name: 'password',
      label: 'Password',
      initValue: '',
      validation: z
        .string()
        .min(6, { message: 'Password must be atleast 6 characters.' }),
    },
  ];

  const onSubmit: (arg0: OnSubmitProps) => void = async ({ values }) => {
    try {
      const res = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      handleLogin(res.token);
    } catch (e) {
      handleLoginError();
    }
    console.log(values);
  };

  return (
    <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="overline" textAlign="center">
        A C S
      </Typography>
      <CustomForm fields={fields} onSubmit={onSubmit} isLoading={isLoading} />
      <Typography variant="body2" sx={{ mt: 1 }}>
        Don&apos;t have an account?&nbsp;
        <Link href="/auth/register">create new</Link>
      </Typography>
    </Box>
  );
};

export default EmailLoginForm;
