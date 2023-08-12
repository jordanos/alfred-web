import { Alert, Snackbar } from '@mui/material';
import React, { FC } from 'react';
import hotToast, { Toaster as HotToaster } from 'react-hot-toast';

export const Toaster = HotToaster;

interface Props {
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

interface ToastProps extends Props {
  visible: boolean;
  onClose: (e: React.SyntheticEvent) => void;
}

const Toast: FC<ToastProps> = (props) => {
  const { visible, message, onClose, severity, ...rest } = props;

  const duration = severity === 'success' ? 3000 : 5000;

  return (
    <Snackbar open={visible} autoHideDuration={duration}>
      <Alert onClose={onClose} sx={{ width: '100%' }} {...rest}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export const toast = (opts: Props) => {
  const { message, severity = 'success' } = opts;

  return hotToast.custom(({ visible, id }) => (
    <Toast
      visible={visible}
      message={message}
      severity={severity}
      onClose={() => {
        hotToast.dismiss(id);
      }}
    />
  ));
};
