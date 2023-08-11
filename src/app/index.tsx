import { FC } from 'react';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4">Hola!</Typography>
    </ThemeProvider>
  );
};

export default App;
