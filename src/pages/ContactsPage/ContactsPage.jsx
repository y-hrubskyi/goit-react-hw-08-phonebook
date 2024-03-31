import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Wrapper } from './ContactsPage.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Wrapper>
      <h2>Contact List</h2>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <ContactForm />
    </Wrapper>
  );
};

export default Contacts;
