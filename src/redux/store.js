import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { filterSlice } from 'redux/filter/slice';
import { contactsSlice } from 'redux/contacts/slice';
import { authReducer } from 'redux/auth/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
