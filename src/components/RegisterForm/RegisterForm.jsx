import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { register } from 'redux/auth/operations';

import {
  Button,
  ErrorMessage,
  Field,
  Form,
  Label,
} from 'components/ContactForm/ContactForm.styled';

const registerSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short').required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(7, 'Must be 7 or more').required('Required'),
});

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
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <Form>
        <Label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </Label>
        <Label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </Label>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Formik>
  );
};
