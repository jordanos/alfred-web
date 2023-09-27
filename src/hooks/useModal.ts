import { ModalContextType, ModalContext } from 'contexts/modalContext';
import { useContext } from 'react';

export const useModal: () => ModalContextType = () => {
  const modalCtx = useContext(ModalContext);
  if (modalCtx === undefined) {
    throw new Error('useModal must be used inside  a Modal Provider');
  }
  return modalCtx;
};
