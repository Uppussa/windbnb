import { useState } from 'react';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import './Nav.css';

const Nav = ({ results, setFiltered }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [guests, setGuests] = useState(1);

  function filterData() {
    const rs = results.filter(dat => {
      const locationMatch = selectedLocation === '' || dat.city.toLowerCase() === selectedLocation.toLowerCase();
      const guestsMatch = dat.maxGuests >= guests;
      return locationMatch && guestsMatch;
    });
    setFiltered(rs);
  }

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo} alt="airbnb logo" className="logo-image" />
      </a>
      <div className='inputs'>
        <select className='locationSelect' value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value=""> Locations</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Turku">Turku</option>
          <option value="Vaasa">Vaasa</option>
          <option value="Oulu">Oulu</option>
        </select>
        <input className='guestsInput' type="number" placeholder='Add Guests' value={guests} onChange={(e) => setGuests(e.target.value)} max="10" min="1" />
        <button className='btn' onClick={filterData}>
          <img src={lupa} alt="search" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;