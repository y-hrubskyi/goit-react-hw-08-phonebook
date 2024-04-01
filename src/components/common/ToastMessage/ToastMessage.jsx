import { Message } from './ToastMessage.styled';

export const ToastMessage = ({ children }) => {
  return (
    <Message>
      <b>{children}</b>
    </Message>
  );
};
