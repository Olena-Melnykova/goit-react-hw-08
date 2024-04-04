import { useDispatch, useSelector } from "react-redux";
import { Label, Input, FormStyled } from './SearchBox.styled';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';



function SearchForm() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <FormStyled>
    <Label>
        Find contacts by name:
    </Label>   
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </FormStyled>  
    
  );
}

export default SearchForm;