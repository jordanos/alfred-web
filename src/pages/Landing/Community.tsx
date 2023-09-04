import { Box, Typography } from '@mui/material';
import testimonialImg from 'assets/images/testimonial.png';
import wave from 'assets/images/wave.png';
import { FC } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials: { id: number; image: string; text: string }[] = [
  {
    id: 1,
    image: testimonialImg,
    text: `import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import testimonialImg from 'assets/images/testimonial.png';
import wave from 'assets/images/wave.png';
import { FC, useState } from 'react';
import TestimonialCard from './TestimonialCard';`,
  },
  {
    id: 2,
    image: testimonialImg,
    text: `import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import MobileStepper from '@mui/mater`,
  },
];

const Community: FC = () => {
  return (
    <Box sx={{ mt: 10, position: 'relative', py: 6 }}>
      <img
        src={wave}
        alt="wave background"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: '10%',
          objectFit: 'cover',
          maxHeight: '360px',
          borderTopRightRadius: '400px',
          borderBottomRightRadius: '400px',
        }}
      />
      <Typography
        variant="h6"
        textAlign="center"
        fontWeight={600}
        sx={{ mb: 4 }}
      >
        Our community with User reviews
      </Typography>
      <Box sx={{ position: 'relative', mx: 16 }}>
        {/* backButton={
            <IconButton
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                backgroundColor: 'primary.main',
                position: 'absolute',
                top: '50%',
                left: 0,
                ml: -2,
              }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </IconButton>
          }
          nextButton={
            <IconButton
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
              sx={{
                backgroundColor: 'primary.main',
                position: 'absolute',
                top: '50%',
                right: 0,
                mr: -2,
              }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </IconButton>
          } */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoPlay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard
                image={testimonial.image}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Community;
