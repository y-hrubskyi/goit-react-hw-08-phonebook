import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const formattedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formattedFilter)
    );
  }
);
