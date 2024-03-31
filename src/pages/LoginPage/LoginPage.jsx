import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthFormWrapper } from 'components/common/AuthFormWrapper/AuthFormWrapper.styled';

const LoginPage = () => {
  return (
    <AuthFormWrapper>
      <LoginForm />
    </AuthFormWrapper>
  );
};

export default LoginPage;
