import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ModalProvider from 'components/CustomModal/ModalProvider';
import Wrapper from 'components/layout/Wrapper/Wrapper';
import { Toaster } from 'components/Toast';
import { FC, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { noAsidePages } from 'routes/menu';
import { themeOptions as darkTheme } from '../constants/darkTheme';
import { themeOptions as lightTheme } from '../constants/lightTheme';

const App: FC = () => {
  const { i18n } = useTranslation();
  const themeMode = useSelector((state) => state.user.theme);
  const lang = useSelector((state) => state.user.lang);
  const theme = useMemo(
    () => createTheme(themeMode === 'dark' ? darkTheme : lightTheme),
    [themeMode]
  );
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <ModalProvider>
          <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Routes>
              {noAsidePages.map((path) => (
                <Route key={path} path={path} />
              ))}
            </Routes>
            <Wrapper />
          </Box>
        </ModalProvider>
        <Toaster position="bottom-left" />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
