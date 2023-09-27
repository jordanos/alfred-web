import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const ModalItemsContainer = styled(Paper)(({ theme }) => ({
  position: 'relative',
  width: '40rem',
  overflow: 'scroll',
  maxWidth: '90vw',
  maxHeight: '90vh',

  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
}));
