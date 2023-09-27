import { createContext } from 'react';

export type ModalNames = 'md1' | 'md2' | 'md3' | 'md4';
export type Payload = {
  title: string;
  action: string;
  data: object;
};
export type ToggleModal = (modalName: ModalNames, payload: Payload) => void;
export type ModalContextType = {
  modals: { [key: string]: boolean };
  toggleModal: ToggleModal;
  payload: Payload;
};

export const defaultModals = {
  md1: false,
  md2: false,
  md3: false,
  md4: false,
};
export const defaultPayload = { title: '', action: 'default', data: {} };

export const ModalContext = createContext<ModalContextType>({
  modals: defaultModals,
  toggleModal: () => {},
  payload: defaultPayload,
});
