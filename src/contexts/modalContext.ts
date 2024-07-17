import { createContext } from 'react';

export type ModalNames = 'md1' | 'md2' | 'md3' | 'delete';
export type Payload = {
  title: string;
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
  delete: false,
  users: false,
};
export const defaultPayload = { title: '', data: {} };

export const ModalContext = createContext<ModalContextType>({
  modals: defaultModals,
  toggleModal: () => {},
  payload: defaultPayload,
});
