import { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { ReactComponent as QuoteSvg } from 'assets/svg/quote.svg';

interface Props {
  image: string;
  text: string;
}

const TestimonialCard: FC<Props> = ({ image, text }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 6,
        borderRadius: { xs: 10, md: '300px' },
        backgroundColor: 'secondary.light',
        position: 'relative',
        maxWidth: '100%',
        pb: { xs: 8, md: 6 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '18%', md: '35%' },
          top: { xs: 40, md: 10 },
          width: { xs: '42px', md: '72px' },
          height: { xs: '42px', md: '72px' },
        }}
      >
        <QuoteSvg
          style={{
            width: '100%',
            height: '100%',
            opacity: '0.6',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, md: 6 },
        }}
      >
        <Box
          sx={{
            width: { xs: '64px', md: '128px' },
            height: { xs: '64px', md: '128px' },
          }}
        >
          <img
            src={image}
            alt="testimony"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '100px',
              borderColor: theme.palette.primary.main,
              borderWidth: '3px',
              borderStyle: 'solid',
            }}
          />
        </Box>
        <Typography
          variant="body1"
          color="text.disabled"
          sx={{
            maxWidth: { xs: '100%', md: '420px' },
            ml: { xs: 0, md: 6 },
            mt: { xs: 4, md: 0 },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
