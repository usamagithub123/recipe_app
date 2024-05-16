import React from 'react'
import './Header.scss'
import SearchBar from '../SearchBar/SearchBar'

function Header({title='My App',setSearchQuery}) {
  return (
    <div className="header">
        <div className="title">{title}</div>
        <div className="rightSection">
        <SearchBar setSearchQuery={setSearchQuery}/>
        <button className='close' onClick={()=>setSearchQuery('')}>X</button>
        </div>
  
    </div>
  )
}

export default Header