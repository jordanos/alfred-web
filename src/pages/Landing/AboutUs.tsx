import { Box, Button, Grid, Typography } from '@mui/material';
import map from 'assets/images/map.png';
import wave from 'assets/images/wave.png';
import { ReactComponent as Marketplace } from 'assets/svg/marketplace.svg';
import { ReactComponent as ProtectedDir } from 'assets/svg/protected-directory.svg';
import { ReactComponent as SecureNegative } from 'assets/svg/secure-negative.svg';
import { ReactComponent as SecurePayment } from 'assets/svg/secure-payment.svg';
import { FC } from 'react';
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
  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ px: 6 }}>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Typography variant="body2" color="text.disabled">
              Build the Future with
            </Typography>
            <Typography
              variant="h5"
              sx={{ mt: 1, fontWeight: 600, maxWidth: 300 }}
            >
              Blockchain technology and currency
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
              Get Whitepaper
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
            Achievements
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 18 }}>
            Full Decentralised and Currency Security
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
            backgroundColor: '#09251E',
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
          <Box sx={{ px: 10, py: 6 }}>
            <Typography variant="h6" fontWeight={600}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 4 }}>
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s, when an unknown
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: 'none',
                mt: 8,
                px: 8,
                color: 'text.primary',
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{}}>
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
              text="Marketplace"
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
              text="Money Protection"
              Icon={SecurePayment}
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
