import { Button } from './IconBtn.styled';

export const IconBtn = ({ onClick, children }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};
