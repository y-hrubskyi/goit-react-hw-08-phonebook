import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    updateFilter(state, { payload }) {
      state[payload.name] = payload.value;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
