import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: { xs: 10, md: 18 },
        px: { xs: 4, md: 8 },
        pt: 6,
        pb: 4,
        backgroundColor:
          theme.palette.mode === 'dark' ? '#00DD9C04' : 'secondary.main',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5" fontWeight={300}>
            ACS
          </Typography>
          <Typography
            variant="body2"
            color="text.disabled"
            sx={{ mt: { xs: 1, md: 2 }, maxWidth: 400 }}
          >
            Answer your customer questions instantly with 24/7 support, reliable
            knowledge base, Easy to use API interface and pre-made chatting
            components.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ display: 'flex' }}>
            <Divider orientation="vertical" sx={{ width: 2, height: '100%' }} />
            <Box>
              <Typography
                variant="body1"
                fontWeight={600}
                sx={{ mb: { xs: 1, md: 2 } }}
              >
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
        {`${new Date().getFullYear()} ACS. All rights reserved.`}
      </Typography>
    </Box>
  );
};

export default Footer;
