/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Link, Typography } from '@mui/material';
import CustomForm, {
  FormField,
  OnSubmitProps,
} from 'components/form/CustomForm';
import { toast } from 'components/Toast';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicPages } from 'routes/menu';
import { z } from 'zod';
import { useRegisterMutation } from '../api/registerApiSlice';
import AuthWrapper from '../components/AuthWrapper';

const fields: FormField[] = [
  {
    fieldType: 'Text',
    required: true,
    name: 'username',
    label: 'Username',
    initValue: '',
    validation: z.string().min(1, { message: 'Username is required.' }),
  },
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
    fieldType: 'Password',
    required: true,
    name: 'password1',
    label: 'Password',
    initValue: '',
    validation: z
      .string()
      .min(8, { message: 'Password must be atleast 8 characters.' }),
  },
  {
    fieldType: 'Password',
    required: true,
    name: 'password2',
    label: 'Confirm password',
    initValue: '',
    validation: z
      .string()
      .min(8, { message: 'Password must be atleast 8 characters.' }),
  },
];

const Register: FC = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit: (arg0: OnSubmitProps) => void = async ({ values }) => {
    try {
      await register(values).unwrap();
      toast({ message: 'Registration completed successfully.' });
      navigate(publicPages.login.path);
    } catch (e) {
      toast({
        message: 'Something went wrong while registering.',
        severity: 'error',
      });
    }
  };

  return (
    <AuthWrapper>
      <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column' }}>
        <CustomForm
          fields={fields}
          onSubmit={onSubmit}
          isLoading={isLoading}
          schemaRefinements={[
            {
              cb: (data) => data.password1 === data.password2,
              info: {
                path: ['password2'], // path of error
                message: "Passwords don't match.",
              },
            },
          ]}
        />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Don&apos;t have an account?&nbsp;
          <Link href={publicPages.login.path}>Login</Link>
        </Typography>
      </Box>
    </AuthWrapper>
  );
};

export default Register;
