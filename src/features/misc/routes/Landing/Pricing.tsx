import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from 'react-i18next';

type FeatureType = { isEnabled: boolean; text: string };

const plans: { [Key: string]: FeatureType[] } = {
  Basic: [
    { isEnabled: true, text: 'Multiple bots' },
    { isEnabled: true, text: 'Unlimited API requests' },
    { isEnabled: false, text: 'Unlimitted plugin access' },
  ],
  Standard: [
    { isEnabled: true, text: 'Multiple bots' },
    { isEnabled: true, text: 'Unlimited API requests' },
    { isEnabled: true, text: 'Unlimitted plugin access' },
  ],
};

interface FeatureProps {
  isEnabled: boolean;
  text: string;
}

const Feature: FC<FeatureProps> = ({ isEnabled, text }) => {
  return (
    <Box display="flex" sx={{ my: 0.5 }}>
      {isEnabled ? (
        <CheckCircleIcon color="success" />
      ) : (
        <CloseIcon color="error" />
      )}
      <Typography variant="body2" sx={{ ml: 2 }}>
        {text}
      </Typography>
    </Box>
  );
};

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: { xs: 8, md: 10 }, px: { xs: 0, md: 6 } }}>
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ mb: 4, textAlign: 'center' }}
      >
        {t('pricing')}
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(plans).map((key) => (
          <Grid key={key} item xs={12} md={4} sx={{ px: 1 }}>
            <Card
              key={key}
              elevation={2}
              sx={{
                borderRadius: 5,
              }}
            >
              <CardContent
                sx={{
                  px: 4,
                  py: 3,
                  backgroundColor: 'secondary.dark',
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="primary"
                  sx={{
                    textTransform: 'capitalize',
                    textAlign: 'center',
                  }}
                >
                  {key}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {plans[key].map((feature) => (
                    <Feature
                      key={feature.text}
                      isEnabled={feature.isEnabled}
                      text={feature.text}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      px: 4,
                      py: 0.5,
                      textTransform: 'none',
                      borderRadius: 10,
                      alignSelf: 'center',
                    }}
                  >
                    <Typography variant="body2">Subscribe</Typography>
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
