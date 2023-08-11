import { Box } from '@mui/material';
import { styled } from '@mui/system';
import ErrorBoundary from 'components/errors/ErrorBoundary';
import Content from '../Content/Content';

const WrapperBox = styled(Box)(({ theme }) => ({
  flex: '6',
  height: '100vh',
  width: '70vw',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    width: '40vw',
  },
}));

const Wrapper = () => {
  return (
    <WrapperBox>
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    </WrapperBox>
  );
};

export default Wrapper;
