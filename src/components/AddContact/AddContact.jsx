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
import { ToastMessage } from 'components/common/ToastMessage/ToastMessage';

export const AddContact = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsModifyLoading);

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
    onClose();
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
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
  );
};
