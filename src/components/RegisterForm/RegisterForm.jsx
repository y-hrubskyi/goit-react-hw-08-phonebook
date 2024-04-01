import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { register } from 'redux/auth/operations';
import { registerSchema } from 'constants/validation/registerSchema';

import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
        toast.success('Successfully registered');
      })
      .catch(error => {
        toast.error(`Oops.. ${error}`);
      });
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
      <SubmitBtn>Sign Up</SubmitBtn>
    </FormBase>
  );
};
