import { Box, Divider, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: FC = () => {
  return (
    <Box sx={{ mt: 8, px: 8, pt: 6, pb: 4, backgroundColor: '#00DD9C04' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5" fontWeight={300}>
            B.Tech
          </Typography>
          <Typography
            variant="body2"
            color="text.disabled"
            sx={{ mt: 2, maxWidth: 400 }}
          >
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ display: 'flex' }}>
            <Divider orientation="vertical" sx={{ width: 2, height: '100%' }} />
            <Box>
              <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
                Social media
              </Typography>
              <Box sx={{ display: 'flex', color: 'primary.main' }}>
                <LinkedInIcon />
                <InstagramIcon sx={{ ml: 2 }} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        textAlign="center"
        color="text.disabled"
        sx={{ mt: 8 }}
      >
        &copy;
        {`${new Date().getFullYear()}. All rights reserved.`}
      </Typography>
    </Box>
  );
};

export default Footer;
