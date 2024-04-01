import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectAuthIsLoading } from 'redux/auth/selectors';
import { register } from 'redux/auth/operations';
import { registerSchema } from 'constants/validation/registerSchema';

import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';
import { ToastMessage } from 'components/common/ToastMessage/ToastMessage';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = async (values, actions) => {
    await toast.promise(dispatch(register(values)).unwrap(), {
      loading: 'Registering...',
      success: <ToastMessage>Registration successful!</ToastMessage>,
      error: <ToastMessage>Registration failed. Try again.</ToastMessage>,
    });
    actions.resetForm();
  };

  return (
    <FormBase
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <FormField label="Name" type="text" name="name" />
      <FormField label="Email" type="email" name="email" />
      <FormField label="Password" type="password" name="password" />
      <SubmitBtn isLoading={isLoading}>Sign Up</SubmitBtn>
    </FormBase>
  );
};
