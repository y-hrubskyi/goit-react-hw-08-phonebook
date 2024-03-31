import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const NavItem = styled.li`
  width: 100px;
  height: 40px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${p => p.theme.colors.black};

  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.lg};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &.active,
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
