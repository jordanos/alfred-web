import { Container, Paper } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="xs">
      <Paper elevation={2} sx={{ width: '100%', p: 2, mt: 24 }}>
        {children}
      </Paper>
    </Container>
  );
};

export default AuthWrapper;
