import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilter } from 'redux/filter/selectors';

import { ContactsList } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let filterInfo = '';
  const results = contacts.length;
  if (!results && !filter) filterInfo = <p>Your contact list is empty</p>;
  if (!results && filter) filterInfo = <p>Not Finded</p>;

  return contacts.length ? (
    <ContactsList>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  ) : (
    filterInfo
  );
};
