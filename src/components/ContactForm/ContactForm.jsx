import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { isInContacts } from 'helpers/isInContacts';

import { Form, Label, Field, Button, ErrorMessage } from './ContactForm.styled';

const contactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short').required('Required'),
  number: Yup.string().min(7, 'Must be 7 or more').required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addContactFoo = contact => {
    const isExist = isInContacts(contacts, contact.name);

    if (isExist) {
      toast.error(`${contact.name} is already in contacts.`);
      return isExist;
    }

    const newContact = { ...contact, id: nanoid() };
    dispatch(addContact(newContact)).then(() =>
      toast.success('Contact successfully added')
    );
  };

  const handleSubmit = (values, actions) => {
    const isAlreadyAdded = addContactFoo(values);
    if (!isAlreadyAdded) {
      actions.resetForm();
    }
  };

  return (
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
  );
};
