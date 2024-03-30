import { Link, NavItem, NavList } from 'components/common/Nav.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        {isLoggedIn && (
          <NavItem>
            <Link to="/contacts">Contacts</Link>
          </NavItem>
        )}
      </NavList>
    </nav>
  );
};
