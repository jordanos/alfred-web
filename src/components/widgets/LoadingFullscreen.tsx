import { Box, CircularProgress } from '@mui/material';

const LoadingFullscreen = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: '#000',
          opacity: 0.2,
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default LoadingFullscreen;
