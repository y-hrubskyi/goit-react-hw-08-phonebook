import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import {
  selectContacts,
  selectIsModifyLoading,
} from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { contactSchema } from 'constants/validation/contactSchema';
import { isInContacts } from 'helpers/isInContacts';

import { ModalBase } from 'components/common/ModalBase/ModalBase';
import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';
import { IconBtn } from 'components/common/IconBtn/IconBtn';
import { ToastMessage } from 'components/common/ToastMessage/ToastMessage';
import { AddIcon } from './AddContact.styled';

export const AddContact = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsModifyLoading);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSubmit = async (values, actions) => {
    const isExist = isInContacts(contacts, values.name);

    if (isExist) {
      toast.error(`${values.name} is already in contacts.`);
      return isExist;
    }

    await toast.promise(dispatch(addContact(values)).unwrap(), {
      loading: 'Adding new contact...',
      success: <ToastMessage>Contact added successful!</ToastMessage>,
      error: <ToastMessage>Failed to add contact. Try again.</ToastMessage>,
    });
    actions.resetForm();
    toggleModal();
  };

  return (
    <>
      <IconBtn type="button" onClick={toggleModal}>
        <AddIcon />
      </IconBtn>
      {modalIsOpen && (
        <ModalBase isOpen={modalIsOpen} onClose={toggleModal}>
          <FormBase
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}
          >
            <FormField label="Name" type="text" name="name" />
            <FormField label="Number" type="tel" name="number" />
            <SubmitBtn isLoading={isLoading}>Add contact</SubmitBtn>
          </FormBase>
        </ModalBase>
      )}
    </>
  );
};
