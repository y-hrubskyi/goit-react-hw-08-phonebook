import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectIsModifyLoading } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';
import { contactSchema } from 'constants/validation/contactSchema';

import { ModalBase } from 'components/common/ModalBase/ModalBase';
import { FormBase } from 'components/common/FormBase/FormBase';
import { FormField } from 'components/common/FormField/FormField';
import { SubmitBtn } from 'components/common/SubmitBtn/SubmitBtn';

export const EditContact = ({
  contact: { id, name, number },
  isOpen,
  onClose,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsModifyLoading);

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
      <FormBase
        initialValues={{ name, number }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <FormField label="Name" type="text" name="name" />
        <FormField label="Number" type="tel" name="number" />
        <SubmitBtn>{isLoading ? 'Updating...' : 'Update contact'}</SubmitBtn>
      </FormBase>
    </ModalBase>
  );
};
