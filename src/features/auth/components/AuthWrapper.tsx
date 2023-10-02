import { Box } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AuthWrapper;
