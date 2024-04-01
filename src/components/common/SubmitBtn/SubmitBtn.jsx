import { Button } from './SubmitBtn.styled';

export const SubmitBtn = ({ children, isLoading }) => {
  return (
    <Button type="submit" disabled={isLoading}>
      {children}
    </Button>
  );
};
