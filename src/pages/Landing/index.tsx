import { Container } from '@mui/material';
import { FC } from 'react';
import AnchorNav from 'react-single-page-navigation';
import AboutUs from './AboutUs';
import Community from './Community';
import Nav from './Nav';
import Services from './Services';

export const elements: { [key: string]: { label: string } } = {
  AboutUs: {
    label: 'About us',
  },
  Services: {
    label: 'Services',
  },
  Community: {
    label: 'Community',
  },
};

const Home: FC = () => {
  return (
    <Container maxWidth="xl" sx={{ maxWidth: '100vw' }}>
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

            <section ref={refs.Community}>
              <Community />
            </section>
          </>
        )}
      </AnchorNav>
    </Container>
  );
};

export default Home;
