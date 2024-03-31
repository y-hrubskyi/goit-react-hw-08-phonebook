import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { isInContacts } from 'helpers/isInContacts';

import { ModalBase } from 'components/common/ModalBase/ModalBase';
import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';
import { IconBtn } from 'components/common/IconBtn/IconBtn';

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
      <IconBtn type="button" onClick={toggleModal}>
        ➕
      </IconBtn>
      <ModalBase isOpen={modalIsOpen} onClose={toggleModal}>
        <FormBase
          initialValues={{ name: '', number: '' }}
          onSubmit={handleSubmit}
          validationSchema={contactsSchema}
        >
          <FormField label="Name" type="text" name="name" />
          <FormField label="Number" type="tel" name="number" />
          <SubmitBtn>Add contact</SubmitBtn>
        </FormBase>
      </ModalBase>
    </>
  );
};
