import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectIsModifyLoading } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { EditContact } from 'components/EditContact/EditContact';
import { UserAvatar } from 'components/common/UserAvatar/UserAvatar.styled';
import { ToastMessage } from 'components/common/ToastMessage/ToastMessage';
import * as SC from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsModifyLoading);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const deleteContactFoo = async contactId => {
    await toast.promise(dispatch(deleteContact(contactId)).unwrap(), {
      loading: 'Deleting contact...',
      success: <ToastMessage>Contact deleted successful!</ToastMessage>,
      error: <ToastMessage>Failed to delete contact. Try again.</ToastMessage>,
    });
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
        <SC.IconBtn
          type="button"
          onClick={toggleModal}
          disabled={isLoading}
          aria-label="edit contact"
        >
          <SC.EditIcon />
        </SC.IconBtn>
      </SC.TBodyData>
      <SC.TBodyData>
        <SC.IconBtn
          type="button"
          onClick={() => deleteContactFoo(contact.id)}
          disabled={isLoading}
          aria-label="delete contact"
        >
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
