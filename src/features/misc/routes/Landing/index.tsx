import { Container } from '@mui/material';
import { FC } from 'react';
import AnchorNav from 'react-single-page-navigation';
import AboutUs from './AboutUs';
import Community from './Community';
import Footer from './Footer';
import Nav from './Nav';
import Pricing from './Pricing';
import Services from './Services';

export const elements: { [key: string]: { label: string } } = {
  AboutUs: {
    label: 'About us',
  },
  Services: {
    label: 'Services',
  },
  Pricing: {
    label: 'Pricing',
  },
  Community: {
    label: 'Community',
  },
};

const Home: FC = () => {
  return (
    <Container maxWidth="xl" sx={{ position: 'relative', mt: 1 }}>
      <AnchorNav elements={elements}>
        {({ refs, activeElement, goTo }) => (
          <>
            <Nav activeElement={activeElement} goTo={goTo} />

            <section ref={refs.AboutUs}>
              <AboutUs />
            </section>

            <section ref={refs.Services}>
              <Services />
            </section>

            <section ref={refs.Pricing}>
              <Pricing />
            </section>

            <section ref={refs.Community}>
              <Community />
            </section>

            <Footer />
          </>
        )}
      </AnchorNav>
    </Container>
  );
};

export default Home;
