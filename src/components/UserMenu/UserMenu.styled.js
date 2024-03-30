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

export const UserAvatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  font-weight: 600;
  font-size: 16px;
  color: ${p => p.theme.colors.accent};

  background: #b6e0b6;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.accent};
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  color: ${p => p.theme.colors.accent};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  border: 1px solid ${p => p.theme.colors.accent};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const LogoutIcon = styled(Logout)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
