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
    text: `"We've seen a significant increase in customer satisfaction
     since implementing the AI chatbot from ACS. It's been a game-changer for our business, allowing us to provide 24/7 support without sacrificing personalized service."
     - Sarah, Customer Service Manager at XYX Corporation`,
  },
  {
    id: 2,
    image: testimonialImg,
    text: `"The AI chatbot has not only improved our response times but also helped us reduce costs by automating routine tasks.
    The best part is that it's easy to use and integrates seamlessly with our existing systems."
    - John, IT Director at ABC Inc.`,
  },
  {
    id: 3,
    image: testimonialImg,
    text: `"Our customers love the chatbot!
    It's like having a virtual concierge service that can answer their questions and help them with everything from ordering products to troubleshooting issues. We couldn't be happier with the results."
    - Emily, Marketing Manager at DEF Enterprises`,
  },
];

const Community: FC = () => {
  return (
    <Box
      sx={{
        mt: { xs: 10, md: 16 },
        position: 'relative',
        py: 1,
        maxWidth: '100%',
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
            maxWidth: '100%',
          }}
        />
      </Box>
      <Typography variant="h6" textAlign="center" fontWeight={600}>
        Our community with User reviews
      </Typography>
      <Box
        sx={{
          position: 'relative',
          mx: { xs: 0, md: 16 },
          mt: 4,
        }}
      >
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
          spaceBetween={30}
          style={{ maxWidth: '100%' }}
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
