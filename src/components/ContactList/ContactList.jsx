import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGetError,
  selectFilteredContacts,
  selectIsGetLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilter } from 'redux/filter/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { Table, Placeholder } from './ContactList.styled';
import { Loader } from 'components/common/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsGetLoading);
  const error = useSelector(selectGetError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let filterInfo = '';
  const results = contacts.length;
  if (!results && !filter && !error && !isLoading)
    filterInfo = 'Your contact list is empty';
  if (!results && filter && !error && !isLoading)
    filterInfo = 'No contacts found';

  return (
    <>
      {isLoading && <Loader />}
      {error && <Placeholder>Oops! Something went wrong</Placeholder>}
      {!isLoading && !error && contacts.length ? (
        <Table>
          <tbody>
            {contacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </tbody>
        </Table>
      ) : (
        <Placeholder>{filterInfo}</Placeholder>
      )}
    </>
  );
};
