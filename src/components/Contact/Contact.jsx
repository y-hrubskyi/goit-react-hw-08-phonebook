import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/contacts/operations';
import { ContactData, DeleteIcon, EditIcon } from './Contact.styled';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { IconBtn } from 'components/common/IconBtn/IconBtn';

export const Contact = ({ contact }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const deleteContactFoo = contactId => {
    dispatch(deleteContact(contactId)).then(() =>
      toast.success('Contact successfully deleted')
    );
  };

  return (
    <li>
      <ContactData>
        {contact.name}: {contact.number}
      </ContactData>
      <IconBtn type="button" onClick={toggleModal}>
        <EditIcon />
      </IconBtn>
      <IconBtn type="button" onClick={() => deleteContactFoo(contact.id)}>
        <DeleteIcon />
      </IconBtn>
      <ContactEditor
        isOpen={modalIsOpen}
        onClose={toggleModal}
        contact={contact}
      />
    </li>
  );
};
