import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
} from './operations';

const handleGetPending = state => {
  state.isGetLoading = true;
  state.getError = null;
};
const handleGetRejected = (state, action) => {
  state.isGetLoading = false;
  state.getError = action.payload;
};

const handleModifyPending = state => {
  state.isModifyLoading = true;
  state.modifyError = null;
};
const handleModifyRejected = (state, action) => {
  state.isModifyLoading = false;
  state.modifyError = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isGetLoading: false,
    getError: null,
    isModifyLoading: false,
    modifyError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handleGetPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isGetLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleGetRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isModifyLoading = false;
        state.items.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isModifyLoading = false;
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isModifyLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addMatcher(
        isAnyOf(
          addContact.pending,
          updateContact.pending,
          deleteContact.pending
        ),
        handleModifyPending
      )
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          updateContact.rejected,
          deleteContact.rejected
        ),
        handleModifyRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
