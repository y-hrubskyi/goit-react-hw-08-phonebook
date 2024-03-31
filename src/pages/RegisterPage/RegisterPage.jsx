import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthFormWrapper } from 'components/common/AuthFormWrapper/AuthFormWrapper.styled';

const RegisterPage = () => {
  return (
    <AuthFormWrapper>
      <RegisterForm />
    </AuthFormWrapper>
  );
};

export default RegisterPage;
