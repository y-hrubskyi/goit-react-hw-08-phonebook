import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { selectIsModifyLoading } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';

import { ModalBase } from 'components/ModalBase/ModalBase';
import { Form, Button } from 'components/ContactForm/ContactForm.styled';
import { FormField } from 'components/common/FormField/FormField';

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
      <Formik
        initialValues={{ name, number }}
        onSubmit={handleSubmit}
        validationSchema={contactsSchema}
      >
        <Form>
          <FormField label="Name" type="text" name="name" />
          <FormField label="Number" type="tel" name="number" />
          <Button type="submit">
            {isLoading ? 'Updating...' : 'Update contact'}
          </Button>
        </Form>
      </Formik>
    </ModalBase>
  );
};
