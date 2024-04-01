import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectContacts, selectIsGetLoading } from 'redux/contacts/selectors';

import { AddContact } from 'components/AddContact/AddContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AddBtn, AddIcon, BtnWrapper, Wrapper } from './ContactsPage.styled';

const Contacts = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsGetLoading);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Wrapper>
      <h2>Contact List</h2>
      <BtnWrapper>
        <AddBtn type="button" onClick={toggleModal}>
          <AddIcon />
        </AddBtn>
      </BtnWrapper>
      {!isLoading && contacts.length > 0 && <Filter />}
      <ContactList />
      {modalIsOpen && <AddContact isOpen={modalIsOpen} onClose={toggleModal} />}
    </Wrapper>
  );
};

export default Contacts;
