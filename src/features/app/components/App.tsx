import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Wrapper from 'components/layout/Wrapper/Wrapper';
import { Toaster } from 'components/toast';
import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { noAsidePages } from 'routes/menu';
import { themeOptions as darkTheme } from '../constants/darkTheme';
import { themeOptions as lightTheme } from '../constants/lightTheme';

const App: FC = () => {
  const themeMode = useSelector((state) => state.app.themeMode);
  const theme = useMemo(
    () => createTheme(themeMode === 'dark' ? darkTheme : lightTheme),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
        <Routes>
          {noAsidePages.map((path) => (
            <Route key={path} path={path} />
          ))}
        </Routes>
        <Wrapper />
      </Box>
      <Toaster position="bottom-left" />
    </ThemeProvider>
  );
};

export default App;
