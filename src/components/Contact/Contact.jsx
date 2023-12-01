import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/contacts/operations';
import { Button, ContactData } from './Contact.styled';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';

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
      <Button type="button" onClick={toggleModal}>
        Edit
      </Button>
      {' | '}
      <Button type="button" onClick={() => deleteContactFoo(contact.id)}>
        Delete
      </Button>
      <ContactEditor
        isOpen={modalIsOpen}
        onClose={toggleModal}
        contact={contact}
      />
    </li>
  );
};
