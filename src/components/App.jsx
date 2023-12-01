import { Toaster } from 'react-hot-toast';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { GlobalStyle } from 'components/GlobalStyle';
import { AppWrapper, PageTitle, Title } from 'components/App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 1500 }} />

      <PageTitle>Phonebook</PageTitle>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </AppWrapper>
  );
};
