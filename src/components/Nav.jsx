import { useState } from 'react'
import logo from '../assets/logo.png'
import './Nav.css'

const Nav = ({ results, setFiltered }) => {

  const [search, setSearch] = useState('')

  function filterData() {
    if (search.trim() !== '') {
      const rs = results.filter(result => result.city.toLowerCase().includes(search.toLowerCase()))
      setFiltered(rs)
    } else {
      setFiltered(results)
    }
  }

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo} alt="airbnb logo" className="logo-image" /> 
      </a>
      <div className='inputs'>
        <input className='locationInput' type="text" placeholder='LOCATION' value={search} onChange={(e) => setSearch(e.target.value)} />
        <input className='guestsInput' type="text" placeholder='Add Guests' />
        <button onClick={filterData}>
          <img src="#" alt="Buscar" />
        </button>
      </div>
    </nav>
  )
}

export default Nav