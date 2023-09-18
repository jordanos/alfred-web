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
        borderRadius: '300px',
        backgroundColor: '#00DD9C1A',
        position: 'relative',
      }}
    >
      <QuoteSvg
        style={{
          position: 'absolute',
          left: '35%',
          top: 10,
          width: '72px',
          height: '72px',
          opacity: '0.6',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          px: 6,
        }}
      >
        <img
          src={image}
          alt="testimony"
          style={{
            width: '128px',
            height: '128px',
            borderRadius: '100px',
            borderColor: theme.palette.primary.main,
            borderWidth: '3px',
            borderStyle: 'solid',
          }}
        />
        <Typography
          variant="body1"
          color="text.disabled"
          sx={{ maxWidth: '420px', ml: 6 }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
