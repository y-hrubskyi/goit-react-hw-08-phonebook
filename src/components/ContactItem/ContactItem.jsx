import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/contacts/operations';

import { EditContact } from 'components/EditContact/EditContact';
import { UserAvatar } from 'components/common/UserAvatar/UserAvatar.styled';
import * as SC from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
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
    <SC.TRow>
      <SC.TBodyData>
        <UserAvatar>{contact.name[0]}</UserAvatar>
      </SC.TBodyData>
      <SC.TBodyData>
        <SC.ContactName>{contact.name}</SC.ContactName>
      </SC.TBodyData>
      <SC.TBodyData>
        <SC.ContactNumber>{contact.number}</SC.ContactNumber>
      </SC.TBodyData>
      <SC.TBodyData>
        <SC.IconBtn type="button" onClick={toggleModal}>
          <SC.EditIcon />
        </SC.IconBtn>
      </SC.TBodyData>
      <SC.TBodyData>
        <SC.IconBtn type="button" onClick={() => deleteContactFoo(contact.id)}>
          <SC.DeleteIcon />
        </SC.IconBtn>
      </SC.TBodyData>
      {modalIsOpen && (
        <EditContact
          isOpen={modalIsOpen}
          onClose={toggleModal}
          contact={contact}
        />
      )}
    </SC.TRow>
  );
};
