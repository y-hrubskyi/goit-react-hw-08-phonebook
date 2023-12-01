import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Title>Contacts List</Title>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <ContactForm />
    </>
  );
};

export default Contacts;
