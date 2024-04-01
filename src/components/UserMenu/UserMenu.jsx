import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import { IconBtn } from 'components/common/IconBtn/IconBtn';
import { UserAvatar } from 'components/common/UserAvatar/UserAvatar.styled';
import * as SC from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <SC.Wrapper>
      <SC.UserWrapper>
        <UserAvatar>{user.name[0]}</UserAvatar>
        <SC.UserName>{user.name}</SC.UserName>
      </SC.UserWrapper>
      <IconBtn type="button" onClick={handleLogout}>
        <SC.LogoutIcon />
      </IconBtn>
    </SC.Wrapper>
  );
};
