import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import { protectedRoutes, publicRoutes } from 'routes/contentRoutes';

const AsideContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflowY: 'scroll',
  marginTop: '4.5rem',
  paddingTop: '1.5em',

  [theme.breakpoints.down('md')]: {
    marginTop: '9.5rem',
    paddingTop: '0',
  },
}));

const ContentRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
      {protectedRoutes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={<AsideContentWrapper>{item.element}</AsideContentWrapper>}
        />
      ))}
    </Routes>
  );
};

export default ContentRoutes;
