import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/contacts/operations';
import {
  Content,
  DeleteIcon,
  EditIcon,
  IconBtns,
  ContactInfo,
  ContactData,
  ContactName,
} from './Contact.styled';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { IconBtn } from 'components/common/IconBtn/IconBtn';
import { UserAvatar } from 'components/common/UserAvatar/UserAvatar.styled';

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
      <Content>
        <ContactInfo>
          <UserAvatar>{contact.name[0]}</UserAvatar>
          <ContactData>
            <ContactName>{contact.name}:</ContactName>
            <p>{contact.number}</p>
          </ContactData>
        </ContactInfo>
        <IconBtns>
          <IconBtn type="button" onClick={toggleModal}>
            <EditIcon />
          </IconBtn>
          <IconBtn type="button" onClick={() => deleteContactFoo(contact.id)}>
            <DeleteIcon />
          </IconBtn>
        </IconBtns>
      </Content>
      <ContactEditor
        isOpen={modalIsOpen}
        onClose={toggleModal}
        contact={contact}
      />
    </li>
  );
};
