import { Container, Paper, Typography } from '@mui/material';
import { SYSTEM_PROVIDER } from 'constants/settings';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthWrapper: FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="xs">
      <Paper
        elevation={2}
        sx={{
          width: '100%',
          p: 2,
          mt: '23vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="overline"
          textAlign="center"
          sx={{ mt: 0.5, fontSize: 12, letterSpacing: 6 }}
        >
          {SYSTEM_PROVIDER}
        </Typography>
        {children}
      </Paper>
    </Container>
  );
};

export default AuthWrapper;
