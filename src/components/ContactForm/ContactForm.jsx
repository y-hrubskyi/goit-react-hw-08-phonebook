import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { isInContacts } from 'helpers/isInContacts';

import { Form, Label, Field, Button, ErrorMessage } from './ContactForm.styled';
import { ModalBase } from 'components/ModalBase/ModalBase';
import { useState } from 'react';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short').required('Required'),
  number: Yup.string().min(7, 'Must be 7 or more').required('Required'),
});

export const ContactForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSubmit = (values, actions) => {
    const isExist = isInContacts(contacts, values.name);

    if (isExist) {
      toast.error(`${values.name} is already in contacts.`);
      return isExist;
    }

    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully added');
        actions.resetForm();
        toggleModal();
      })
      .catch(error => {
        toast.error(`Oops.. ${error}`);
      });
  };

  return (
    <>
      <Button type="button" onClick={toggleModal}>
        ➕
      </Button>
      <ModalBase isOpen={modalIsOpen} onClose={toggleModal}>
        <Formik
          initialValues={{ name: '', number: '' }}
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

            <Button type="submit">Add contact</Button>
          </Form>
        </Formik>
      </ModalBase>
    </>
  );
};
