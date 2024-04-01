import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectIsModifyLoading } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';
import { contactSchema } from 'constants/validation/contactSchema';

import { ModalBase } from 'components/common/ModalBase/ModalBase';
import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';
import { ToastMessage } from 'components/common/ToastMessage/ToastMessage';

export const EditContact = ({
  contact: { id, name, number },
  isOpen,
  onClose,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsModifyLoading);

  const handleSubmit = async (values, actions) => {
    await toast.promise(dispatch(updateContact({ ...values, id })).unwrap(), {
      loading: 'Updating contact...',
      success: <ToastMessage>Contact updated successful!</ToastMessage>,
      error: <ToastMessage>Update failed. Try again.</ToastMessage>,
    });
    actions.resetForm();
    onClose();
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <FormBase
        initialValues={{ name, number }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <FormField label="Name" type="text" name="name" />
        <FormField label="Number" type="tel" name="number" />
        <SubmitBtn isLoading={isLoading}>Update contact</SubmitBtn>
      </FormBase>
    </ModalBase>
  );
};
