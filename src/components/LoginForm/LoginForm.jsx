import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { logIn } from 'redux/auth/operations';
import { loginSchema } from 'constants/validation/loginSchema';

import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
        toast.success('Successfully logined');
      })
      .catch(error => {
        toast.error(`Oops.. ${error}`);
      });
  };

  return (
    <FormBase
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <FormField label="Email" type="email" name="email" />
      <FormField label="Password" type="password" name="password" />
      <SubmitBtn>Login</SubmitBtn>
    </FormBase>
  );
};
