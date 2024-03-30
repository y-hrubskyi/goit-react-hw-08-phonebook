import { useSelector } from 'react-redux';
import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
  selectAuthUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const user = useSelector(selectAuthUser);

  return { isLoggedIn, isRefreshing, user };
};
