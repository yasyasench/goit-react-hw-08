import { useId } from 'react';
import css from './SearchBox.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  
  const searchId = useId();
	const dispatch = useDispatch();
	const value = useSelector(selectNameFilter);

	const onFilter = (e) => dispatch(changeFilter(e.target.value));

  return (

    <div className={css.searchBox}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.searchInput}
        id={searchId}
        type='search'
        name="search"
        value={value}
        onChange={onFilter}>
        
        </input>
    </div>
  )
}

export default SearchBox