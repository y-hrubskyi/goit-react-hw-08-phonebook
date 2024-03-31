import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Title, Wrapper } from './ContactsPage.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Wrapper>
      <Title>Contacts List</Title>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <ContactForm />
    </Wrapper>
  );
};

export default Contacts;
