import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectAuthIsLoading } from 'redux/auth/selectors';
import { logIn } from 'redux/auth/operations';
import { loginSchema } from 'constants/validation/loginSchema';

import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';
import { ToastMessage } from 'components/common/ToastMessage/ToastMessage';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = async (values, actions) => {
    await toast.promise(dispatch(logIn(values)).unwrap(), {
      loading: 'Logging in...',
      success: <ToastMessage>Login successful!</ToastMessage>,
      error: <ToastMessage>Login failed. Try again.</ToastMessage>,
    });
    actions.resetForm();
  };

  return (
    <FormBase
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <FormField label="Email" type="email" name="email" />
      <FormField label="Password" type="password" name="password" />
      <SubmitBtn isLoading={isLoading}>Login</SubmitBtn>
    </FormBase>
  );
};
