import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        <div className='header__logo'>
            <p>mini<span>-</span>-<span className='header__logoText'>Reddit</span></p>
        </div>
        <div className='header__search'>
            <SearchIcon className='header__searchIcon'/>
            <input type="text"/>
        </div>
        
    </div>
  )
}

export default Header