import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import * as SC from './UserMenu.styled';
import { IconBtn } from 'components/common/IconBtn/IconBtn';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <SC.Wrapper>
      <SC.UserWrapper>
        <SC.UserAvatar>{user.name[0]}</SC.UserAvatar>
        <SC.UserName>{user.name}</SC.UserName>
      </SC.UserWrapper>
      <IconBtn type="button" onClick={handleLogout}>
        <SC.LogoutIcon />
      </IconBtn>
    </SC.Wrapper>
  );
};
