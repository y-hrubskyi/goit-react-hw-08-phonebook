import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Label>
      Find by name
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </Label>
  );
};
