import { useSelector } from 'react-redux';

import { selectContacts, selectIsGetLoading } from 'redux/contacts/selectors';

import { AddContact } from 'components/AddContact/AddContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from './ContactsPage.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsGetLoading);

  return (
    <Wrapper>
      <h2>Contact List</h2>
      {!isLoading && contacts.length > 0 && <Filter />}
      <ContactList />
      <AddContact />
    </Wrapper>
  );
};

export default Contacts;
