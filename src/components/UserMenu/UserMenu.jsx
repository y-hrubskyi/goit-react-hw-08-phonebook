import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import { UserAvatar } from 'components/common/UserAvatar/UserAvatar.styled';
import { IconBtn } from 'components/common/IconBtn/IconBtn';
import { LogoutIcon, UserName, UserWrapper, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserWrapper>
        <UserAvatar>{user.name[0]}</UserAvatar>
        <UserName>{user.name}</UserName>
      </UserWrapper>
      <IconBtn type="button" onClick={handleLogout}>
        <LogoutIcon />
      </IconBtn>
    </Wrapper>
  );
};
