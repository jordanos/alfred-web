import {
  defaultModals,
  ModalContext,
  ToggleModal,
} from 'contexts/modalContext';
import { ReactNode, FC, useMemo, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ModalProvider: FC<Props> = ({ children }) => {
  const [modals, setModals] = useState(defaultModals);

  const [payload, setPayload] = useState({
    title: '',
    data: {},
  });

  const contextVals = useMemo(() => {
    const toggleModal: ToggleModal = (modalName, tempPayload) => {
      if (payload) {
        setPayload(tempPayload);
      }
      setModals((prev) => ({
        ...prev,
        [modalName]: !prev[modalName],
      }));
    };
    return { modals, toggleModal, payload };
  }, [modals, payload]);

  return (
    <ModalContext.Provider value={contextVals}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
