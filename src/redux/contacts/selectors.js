import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectContacts = state => state.contacts.items;

export const selectIsGetLoading = state => state.contacts.isGetLoading;
export const selectGetError = state => state.contacts.getError;

export const selectIsModifyLoading = state => state.contacts.isModifyLoading;
export const selectModifyError = state => state.contacts.modifyError;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const formattedFilter = filter.name.toLowerCase();

    return contacts
      .filter(
        ({ name, number }) =>
          name.toLowerCase().includes(formattedFilter) &&
          number.includes(filter.number)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
);
