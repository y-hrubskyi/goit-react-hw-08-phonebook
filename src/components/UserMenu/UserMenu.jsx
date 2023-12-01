import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Wrapper>
  );
};
