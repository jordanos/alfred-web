import { Box, Button, Typography } from '@mui/material';
import { ReactComponent as Connect } from 'assets/svg/connect.svg';
import { FC } from 'react';
import ServicesCard, { ServiceCardInitProps } from './ServicesCard';

const services: ServiceCardInitProps[] = [
  {
    id: '01',
    title: 'Consulting',
    text: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s,",
    Icon: Connect,
  },
  {
    id: '02',
    title: 'Research & Compliance',
    text: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown title",
    Icon: Connect,
  },
  {
    id: '03',
    title: 'Technology',
    text: "A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown title",
    Icon: Connect,
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
        How Do We Work Our System And Our Journey
      </Typography>
      <Box>
        {services.map((service, index) => (
          <ServicesCard
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
