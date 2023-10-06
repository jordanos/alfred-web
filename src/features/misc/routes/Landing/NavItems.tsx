import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { toggleTheme } from 'features/auth/userSlice';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { publicPages } from 'routes/menu';
import { elements } from '.';
import { NavProps } from './Nav';

interface NavIemsProps extends NavProps {
  setMobileNav: Function;
}

const NavItems: FC<NavIemsProps> = ({ activeElement, goTo, setMobileNav }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => {
    return state.user.theme;
  });
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <Typography variant="body2">{t(elements[key].label)}</Typography>
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

      <Tooltip title="Change theme">
        <IconButton
          size="small"
          onClick={() => dispatch(toggleTheme({ payload: '' }))}
          sx={{ ml: { xs: 0, md: 6 }, mt: { xs: 1, md: 0 }, maxWidth: 36 }}
        >
          {themeMode === 'dark' ? (
            <LightModeIcon color="primary" />
          ) : (
            <DarkModeIcon color="primary" />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip title="Languages">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: { xs: 0, md: 2 }, mt: { xs: 1, md: 0 }, maxWidth: 36 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <LanguageIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} sx={{ px: 2 }}>
          English
        </MenuItem>
      </Menu>

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
        onClick={() => navigate(publicPages.login.path)}
      >
        {t('join-for-free')}
      </Button>
    </>
  );
};

export default NavItems;
