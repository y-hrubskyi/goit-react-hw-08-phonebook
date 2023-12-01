import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </Label>
  );
};
