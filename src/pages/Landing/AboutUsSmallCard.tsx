import { Box, Typography } from '@mui/material';
import { FC, FunctionComponent } from 'react';

interface Props {
  shadowColor: string;
  shadowDirection: 'left' | 'right';
  text: string;
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  alignment: { [key: string]: number | string };
}

const AboutUsSmallCard: FC<Props> = ({
  shadowColor,
  shadowDirection,
  text,
  Icon,
  alignment,
}) => {
  return (
    <Box sx={{ position: 'absolute', ...alignment }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'grey.800',
            height: 125,
            width: 175,
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.00) 100%)',
            backdropFilter: 'blur(25px)',
          }}
        >
          <Box
            sx={{
              width: 0,
              height: 0,
              position: 'absolute',
              top: 10,
              left: shadowDirection === 'left' ? 40 : 110,
              boxShadow: `0px 0px 43px 22px ${shadowColor}`,
            }}
          />
          <Icon style={{ width: '46px', height: '42px' }} />
          <Typography variant="body2" fontWeight={400} sx={{ mt: 2 }}>
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsSmallCard;
