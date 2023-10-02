import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { toggleTheme } from 'features/auth/userSlice';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { elements } from '.';

interface Props {
  activeElement: string | number | undefined;
  goTo: Function;
}

interface NavProps extends Props {
  setMobileNav: Function;
}

const NavItems: FC<NavProps> = ({ activeElement, goTo, setMobileNav }) => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => {
    return state.user.theme;
  });

  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
        {Object.keys(elements).map((key) => {
          const isActive = activeElement === key;

          return (
            <Box
              key={key}
              onClick={() => {
                goTo(key);
                setMobileNav(false);
              }}
              sx={{
                cursor: 'pointer',
                color: isActive ? 'primary.main' : 'text.primary',
                mr: 8,
                '&:last-child': {
                  mr: 0,
                },
                mt: { xs: 1.5, md: 0 },
              }}
            >
              <Typography variant="body2">{elements[key].label}</Typography>
              {isActive && (
                <Box
                  sx={{
                    width: '70%',
                    borderRadius: 5,
                    height: 3,
                    mt: 0.5,
                    backgroundColor: 'primary.main',
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      <IconButton
        size="small"
        onClick={() => dispatch(toggleTheme({ payload: '' }))}
        sx={{ ml: { xs: 0, md: 6 }, mt: { xs: 2, md: 0 }, maxWidth: 36 }}
      >
        {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      <Button
        variant="outlined"
        size="large"
        sx={{
          color: 'text.primary',
          textTransform: 'none',
          fontWeight: 'bold',
          ml: { xs: 0, md: 4 },
          mt: { xs: 6, md: 0 },
        }}
      >
        Join for free
      </Button>
    </>
  );
};

const Nav: FC<Props> = ({ activeElement, goTo }) => {
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
