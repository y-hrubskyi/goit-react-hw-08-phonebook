import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/App.styled';

const Contacts = () => {
  return (
    <>
      <Title>Contacts List</Title>
      <Filter />
      <ContactList />
      <ContactForm />
    </>
  );
};

export default Contacts;
