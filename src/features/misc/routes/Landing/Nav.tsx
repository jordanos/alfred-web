import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { FC, useState } from 'react';
import NavItems from './NavItems';

export interface NavProps {
  activeElement: string | number | undefined;
  goTo: Function;
}

const Nav: FC<NavProps> = ({ activeElement, goTo }) => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'secondary.dark',
        height: 75,
        borderRadius: 10,
        px: { xs: 4, md: 8 },
        my: 2,
        mt: 2.25,
        position: 'sticky',
        top: 15,
        left: 0,
        right: 0,
        zIndex: 1,
        boxShadow: '0px 0px 3px -1px rgba(0,0,0,0.75)',
      }}
    >
      <Typography variant="overline" fontSize={28} fontWeight={400}>
        A C S
      </Typography>
      <IconButton
        sx={{ display: { xs: 'block', md: 'none' } }}
        onClick={() => setMobileNav((prev) => !prev)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={mobileNav}
        onClose={() => setMobileNav((prev) => !prev)}
        sx={{ display: { sm: 'block', md: 'none' } }}
      >
        <Box
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            bottom: 0,
            width: 250,
            height: '100vh',
            backgroundColor: 'secondary.dark',
            pl: 2,
            pr: 4,
            py: 6,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <NavItems
            activeElement={activeElement}
            goTo={goTo}
            setMobileNav={setMobileNav}
          />
        </Box>
      </Drawer>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        <NavItems
          activeElement={activeElement}
          goTo={goTo}
          setMobileNav={setMobileNav}
        />
      </Box>
    </Box>
  );
};

export default Nav;
