import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { register } from 'redux/auth/operations';

import { Form } from 'components/ContactForm/ContactForm.styled';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';

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
        <FormField label="Name" type="text" name="name" />
        <FormField label="Email" type="email" name="email" />
        <FormField label="Password" type="password" name="password" />
        <SubmitBtn>Sign Up</SubmitBtn>
      </Form>
    </Formik>
  );
};
