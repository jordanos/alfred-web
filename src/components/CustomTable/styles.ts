import { Box, Button, Menu } from '@mui/material';
import { alpha, styled } from '@mui/system';

export const StyledToolbarButton = styled(Button)(() => ({
  width: '250px',
  fontWeight: 500,
}));

export const StyledToolbarWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '50%',
  },
}));

export const StyledInnerToolbarWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    width: '100%',
  },
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
