import { Link, NavItem, NavList } from 'components/common/Nav/Nav.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <NavItem>
        <Link to="/register">Register</Link>
      </NavItem>
      <NavItem>
        <Link to="/login">Login</Link>
      </NavItem>
    </NavList>
  );
};
