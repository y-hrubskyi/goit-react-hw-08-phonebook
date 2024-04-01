import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(updateFilter({ name, value }));
  };

  return (
    <>
      <Label>
        Find by name
        <Input
          type="text"
          name="name"
          value={filter.name}
          onChange={handleChange}
          placeholder="Type name here..."
        />
      </Label>
      <Label>
        Find by number
        <Input
          type="text"
          name="number"
          value={filter.number}
          onChange={handleChange}
          placeholder="Type number here..."
        />
      </Label>
    </>
  );
};
