import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography, useTheme } from '@mui/material';
import { ModalNames, defaultPayload } from 'contexts/modalContext';
import { useModal } from 'hooks/useModal';
import { FC, ReactNode } from 'react';
import { ModalItemsContainer } from './styles';

interface Props {
  modal: ModalNames;
  children: ReactNode;
  size?: 'small' | 'large';
}

const CustomModal: FC<Props> = ({ modal, children, size }) => {
  const { modals, toggleModal, payload } = useModal();
  const theme = useTheme();

  // TODO: Passing parent props to each child
  // const childrenWithProps = React.Children.map(children, (child) => {
  //   // Checking isValidElement is the safe way and avoids a
  //   // typescript error too.
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child);
  //   }
  //   return child;
  // });

  return (
    <Modal
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={modals[modal]}
      onClose={() => toggleModal(modal, defaultPayload)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="modal-wrapper"
    >
      <Box
        style={{
          position: 'relative',
          color: theme.palette.getContrastText(theme.palette.primary.light),
        }}
      >
        <Box
          sx={{
            px: { xs: 1, md: 2 },
            py: 0.5,
            display: 'flex',
            width: '100%',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            borderRadius: '5px 5px 0px 0px',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.light,
          }}
        >
          <IconButton
            size="small"
            onClick={() => {
              toggleModal(modal, defaultPayload);
            }}
            color="inherit"
          >
            <CloseIcon sx={{ width: 20, height: 20 }} />
          </IconButton>
          <Typography variant="overline">{payload.title}</Typography>
        </Box>
        <ModalItemsContainer
          sx={{ width: size === 'small' ? '40rem' : '96vw' }}
        >
          <Box style={{ display: 'inline-block', minWidth: '100%' }}>
            <Box sx={{ px: { xs: 1, md: 2 }, py: 1, pb: 4 }}>{children}</Box>
          </Box>
        </ModalItemsContainer>
      </Box>
    </Modal>
  );
};

CustomModal.defaultProps = {
  size: 'small',
};

export default CustomModal;
