import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/App.styled';

const Contacts = () => {
  return (
    <>
      <ContactForm />
      <Title>Contacts List</Title>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
