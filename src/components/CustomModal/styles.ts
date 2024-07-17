import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const ModalItemsContainer = styled(Paper)(({ theme }) => ({
  position: 'relative',
  width: '96vw',
  overflowY: 'scroll',
  maxWidth: '96vw',
  maxHeight: '90vh',
  borderRadius: '0px 0px 5px 5px',
  [theme.breakpoints.down('md')]: {
    width: '90vw',
  },
  // scrollbar
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));
