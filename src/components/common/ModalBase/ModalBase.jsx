import Modal from 'react-modal';

import { modalStyles } from './ModalBase.styled';

Modal.setAppElement('#root');

export const ModalBase = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      {children}
    </Modal>
  );
};
