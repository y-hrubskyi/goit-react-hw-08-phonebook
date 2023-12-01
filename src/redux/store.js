import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from 'redux/filterSlice';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
