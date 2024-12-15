import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Nav = () => {
  const{searchText,setSearchText}=useContext(DataContext)
  return (
    <main className='NavigationMain'>
      <form
        className='NavForm'
        onSubmit={(e) => e.preventDefault()}
      >
        <label>Search Posts</label>
        <input
          type='search'
          placeholder='Search Posts'
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />
      </form>
      <nav>
        <ul>
          <li><Link to="/">Home</Link><br></br></li>
          <li><Link to="/Post">Post</Link><br></br></li>
          <li><Link to="/About">About</Link><br></br></li>
        </ul>
      </nav>
    </main>
  )
}

export default Nav