import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { updateContact } from 'redux/contacts/operations';
import { ModalBase } from 'components/ModalBase/ModalBase';
import {
  Form,
  Label,
  Field,
  Button,
  ErrorMessage,
} from 'components/ContactForm/ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short').required('Required'),
  number: Yup.string().min(7, 'Must be 7 or more').required('Required'),
});

export const ContactEditor = ({
  contact: { id, name, number },
  isOpen,
  onClose,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(updateContact({ ...values, id }))
      .unwrap()
      .then(() => {
        actions.resetForm();
        toast.success('Successfully updated');
        onClose();
      })
      .catch(error => {
        toast.error(`Oops.. ${error}`);
      });
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{ name, number }}
        onSubmit={handleSubmit}
        validationSchema={contactsSchema}
      >
        <Form>
          <Label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </Label>

          <Label>
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="span" />
          </Label>

          <Button type="submit">Update contact</Button>
        </Form>
      </Formik>
    </ModalBase>
  );
};
