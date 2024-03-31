import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { logIn } from 'redux/auth/operations';

import { Button, Form } from 'components/ContactForm/ContactForm.styled';
import { FormField } from 'components/common/FormField/FormField';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Must be 7 or more').required('Required'),
});

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
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form>
        <FormField label="Email" type="email" name="email" />
        <FormField label="Password" type="password" name="password" />
        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  );
};
