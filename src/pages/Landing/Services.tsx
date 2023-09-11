import { Box, Button, Typography } from '@mui/material';
import { ReactComponent as Setup } from 'assets/svg/setup.svg';
import { ReactComponent as Setting } from 'assets/svg/setting.svg';
import { ReactComponent as Integration } from 'assets/svg/integration.svg';
import { FC } from 'react';
import ServicesCard, { ServiceCardInitProps } from './ServicesCard';

const services: ServiceCardInitProps[] = [
  {
    id: '01',
    title: 'Setup',
    text: 'Register, login and create your AI chat-bot. Upload documents(txt, pdf) that the bot will refer to answer your customer questions and customize it to meet your needs.',
    Icon: Setup,
  },
  {
    id: '02',
    title: 'Test & Fine-tune',
    text: 'Use the chatting playground feature to optimize and test the bot.',
    Icon: Setting,
  },
  {
    id: '03',
    title: 'Integration',
    text: 'Get an API key and integrate the bot to your organization website or mobile app.',
    Icon: Integration,
  },
];

const Services: FC = () => {
  return (
    <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant="h6"
        fontWeight={600}
        textAlign="center"
        fontSize={18}
        sx={{ my: 4 }}
      >
        How Do We Work Our System
      </Typography>
      <Box>
        {services.map((service, index) => (
          <ServicesCard
            key={service.id}
            {...service}
            alignment={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </Box>
      <Button
        variant="outlined"
        size="large"
        sx={{
          textTransform: 'none',
          mt: 4,
          px: 6,
          color: 'text.primary',
          alignSelf: 'center',
        }}
      >
        <Typography variant="body2">Let&apos;s See More</Typography>
      </Button>
    </Box>
  );
};

export default Services;
