import { Box, Typography } from '@mui/material';
import { ReactComponent as Integration } from 'assets/svg/integration.svg';
import { ReactComponent as Setting } from 'assets/svg/setting.svg';
import { ReactComponent as Setup } from 'assets/svg/setup.svg';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ServicesCard, { ServiceCardInitProps } from './ServicesCard';

const services: ServiceCardInitProps[] = [
  {
    id: '01',
    title: 'Setup',
    text: 'Register, login and create a space for your app. Upload documents(txt, pdf) that Alfred will refer to answer questions. Install plugins to get realtime information from database and more.',
    Icon: Setup,
  },
  {
    id: '02',
    title: 'Test & Fine-tune',
    text: 'Use the chatting playground feature to optimize and test Alfred.',
    Icon: Setting,
  },
  {
    id: '03',
    title: 'Integration',
    text: 'Get an API key and integrate Alfred to your SaaS product.',
    Icon: Integration,
  },
];

const Services: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        mt: { xs: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        overflowX: 'hidden',
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        textAlign="center"
        fontSize={18}
        sx={{ my: 4 }}
      >
        {t('how-do-we-work-our-system')}
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
    </Box>
  );
};

export default Services;
