import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Wrapper from 'components/layout/Wrapper/Wrapper';
import { Toaster } from 'components/toast';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { noAsidePages } from 'routes/menu';

export const theme = createTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
        <Routes>
          {noAsidePages.map((path) => (
            <Route key={path} path={path} />
          ))}
          {/* <Route path="*" element={<Aside />} /> */}
        </Routes>
        <Wrapper />
        <Toaster position="bottom-left" />
      </Box>
    </ThemeProvider>
  );
};

export default App;
