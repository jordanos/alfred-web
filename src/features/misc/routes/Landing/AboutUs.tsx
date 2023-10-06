import { Box, Button, Grid, Typography } from '@mui/material';
import apiImg from 'assets/images/api.png';
import map from 'assets/images/map.png';
import wave from 'assets/images/wave.png';
import { ReactComponent as Marketplace } from 'assets/svg/marketplace.svg';
import { ReactComponent as ProtectedDir } from 'assets/svg/protected-directory.svg';
import { ReactComponent as SecureNegative } from 'assets/svg/secure-negative.svg';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import AboutUsSmallCard from './AboutUsSmallCard';

interface CounterProps {
  text: string;
  count: number;
}

const Counter: FC<CounterProps> = ({ text, count }) => {
  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" color="primary.main" sx={{ fontWeight: 600 }}>
          {`${count}`}
        </Typography>
        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
          +
        </Typography>
      </Box>
      <Typography variant="body2" color="text.disabled">
        {text}
      </Typography>
    </Box>
  );
};

const AboutUs: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 10, maxWidth: '100%', overflowX: 'hidden' }}>
      <Box sx={{ px: 6 }}>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Typography variant="body2" color="text.disabled">
              {t('slogan-1')}
            </Typography>
            <Typography
              variant="h5"
              sx={{ mt: 1, fontWeight: 600, maxWidth: 300 }}
            >
              {t('slogan-2')}
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                mt: 4,
                px: 5,
                fontWeight: 600,
                fontSize: 12,
              }}
            >
              {t('start-creating')}
            </Button>
          </Grid>
          <Grid item sm={12} md={6} />
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <Typography variant="body2" color="text.disabled">
            {t('achievements')}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18 }}>
            {t('24-aviablability-everywhere')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: { xs: '100%', md: 420 },
              mt: 3,
            }}
          >
            <Counter text="happy users" count={10} />
            <Counter text="happy users" count={100} />
            <Counter text="happy users" count={120} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#0D0D0D' }}>
        <Box
          sx={{
            px: 6,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={map}
            alt="Map"
            style={{ width: '80%', objectFit: 'cover' }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 8, position: 'relative' }}>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: '20%',
            borderTopRightRadius: 300,
            borderBottomRightRadius: 300,
            minHeight: '360px',
            opacity: '0.2',
          }}
        />
        <img
          src={wave}
          alt="wave background"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: '50%',
            objectFit: 'cover',
            maxHeight: '360px',
          }}
        />
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ px: { xs: 4, md: 10 }, py: 6 }}>
            <Typography variant="h6" fontWeight={600}>
              {t('about-us')}
            </Typography>
            <Typography variant="body2" sx={{ mt: { xs: 1, md: 2 } }}>
              {t('about-us-desc')}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ mt: { xs: 8, md: 0 } }}>
          <Box
            sx={{
              position: 'relative',
              height: '360px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <AboutUsSmallCard
              shadowColor="#FFB413"
              shadowDirection="left"
              text="Instant answers"
              Icon={Marketplace}
              alignment={{ top: 0, left: 0 }}
            />
            <AboutUsSmallCard
              shadowColor="#05D2FF"
              shadowDirection="left"
              text="Data Protection"
              Icon={ProtectedDir}
              alignment={{ top: 140, left: 60 }}
            />
            <AboutUsSmallCard
              shadowColor="#FD5A14"
              shadowDirection="right"
              text="API gateway"
              image={apiImg}
              alignment={{ top: 70, left: 190 }}
            />
            <AboutUsSmallCard
              shadowColor="#00DD9C"
              shadowDirection="right"
              text="Fast & Secure"
              Icon={SecureNegative}
              alignment={{ top: 210, left: 250 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
