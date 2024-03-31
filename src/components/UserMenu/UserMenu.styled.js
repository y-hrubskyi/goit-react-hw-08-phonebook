import styled from 'styled-components';

import { ReactComponent as Logout } from 'assets/icons/logout.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const LogoutIcon = styled(Logout)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
