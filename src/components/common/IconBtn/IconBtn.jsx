import { Button } from './IconBtn.styled';

export const IconBtn = ({ onClick, ariaLabel, children }) => {
  return (
    <Button type="button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Button>
  );
};
