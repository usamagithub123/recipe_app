import React from 'react'
import { useState } from 'react'
import './SearchBar.scss'

function SearchBar({setSearchQuery}) {
    const [searchText ,setSearchText]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearchText("")
        setSearchQuery(searchText)

    }
  return (
    <div className='searchBar'>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='search recipes'
            value={searchText}
            onChange={e=>setSearchText(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar