import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {

  const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm)
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value)
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  }

  return (
    <div className='header'>
        <div className='header__logo'>
            <p>mini<span>-</span>-<span className='header__logoText'>Reddit</span></p>
        </div>

        <form className='header__search'>
            <SearchIcon className='header__searchIcon'/>
            <input 
              type="text"
              placeholder='Search'
              value={searchTermLocal}
              onChange={onSearchTermChange}
            />
            <button type='submit' onClick={onSearchTermSubmit}></button>
        </form>
       
        
    </div>
  )
}

export default Header