import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGetError,
  selectFilteredContacts,
  selectIsGetLoading,
} from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

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

  const results = contacts.length;
  let filterResult = `Total: ${results}`;
  if (results && (filter.name || filter.number))
    filterResult = `Found: ${results}`;
  if (!results && (filter.name || filter.number))
    filterResult = 'No contacts found';
  if (!results && !filter.name && !filter.number)
    filterResult = 'Your contact list is empty';

  return (
    <>
      {isLoading && <Loader />}
      {error && <Placeholder>Oops! Something went wrong</Placeholder>}
      {!isLoading && !error && <Placeholder>{filterResult}</Placeholder>}
      {!isLoading && !error && contacts.length > 0 && (
        <Table>
          <tbody>
            {contacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
