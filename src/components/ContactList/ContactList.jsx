import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactsList } from './ContactList.styled';
import { useEffect } from 'react';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  );
};
