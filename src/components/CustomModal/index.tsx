import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { defaultPayload, ModalNames } from 'contexts/modalContext';
import { useModal } from 'hooks/useModal';
import { FC, ReactNode } from 'react';
import { ModalItemsContainer } from './styles';

interface Props {
  modal: ModalNames;
  children: ReactNode;
  title: string | undefined;
}

const CustomModal: FC<Props> = ({ modal, children, title }) => {
  const { modals, toggleModal, payload } = useModal();

  return (
    <Modal
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      open={modals[modal]}
      onClose={() => toggleModal(modal, defaultPayload)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="modal-wrapper"
    >
      <ModalItemsContainer>
        <Box
          sx={{
            px: { xs: 1, md: 2 },
            py: 0.5,
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'secondary.light',
            mb: 1,
          }}
        >
          <IconButton
            size="small"
            onClick={() => {
              toggleModal(modal, defaultPayload);
            }}
          >
            <CloseIcon sx={{ width: 20, height: 20 }} />
          </IconButton>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {payload.title || title}
          </Typography>
        </Box>
        <Box sx={{ px: { xs: 1, md: 2 }, py: 1, pb: 2 }}>{children}</Box>
      </ModalItemsContainer>
    </Modal>
  );
};

export default CustomModal;
