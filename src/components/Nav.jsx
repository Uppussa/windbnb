import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import './Nav.css';

const Nav = ({ results, setFiltered }) => {
  const [search, setSearch] = useState('');
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const guestsModalRef = useRef(null);

  const handleCloseGuestsModal = () => {
    setShowGuestsModal(false);
  };

  const handleClickOutside = (event) => {
    if (guestsModalRef.current && !guestsModalRef.current.contains(event.target)) {
      handleCloseGuestsModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  function filterData() {
    if (search.trim() !== '') {
      const rs = results.filter(result =>
        result.city.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(rs);
    } else {
      setFiltered(results);
    }
  }

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo} alt="airbnb logo" className="logo-image" />
      </a>
      <div className='inputs'>
        <div className="search-container">
          <div className="input-container">
            <input
              className='locationInput'
              type="text"
              placeholder='LOCATION'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
              className='guestsInput'
              type="text"
              placeholder='Add Guests'
              onClick={() => setShowGuestsModal(true)}
              readOnly
              value={`${adults + children} ${adults + children === 1 ? 'guest' : 'guests'}`}
            />
          </div>
          {showGuestsModal && (
            <div className="guests-container" ref={guestsModalRef}>
              <div className="guests-section">
                <h3>Adults</h3>
                <div className="guests-buttons">
                  <button
                    className="guest-button"
                    onClick={() => {
                      setAdults(adults - 1);
                      if (adults === 1) handleCloseGuestsModal();
                    }}
                    disabled={adults === 0}
                  >
                    -
                  </button>
                  <span className="guest-count">{adults}</span>
                  <button
                    className="guest-button"
                    onClick={() => setAdults(adults + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="guests-section">
                <h3>Children</h3>
                <div className="guests-buttons">
                  <button
                    className="guest-button"
                    onClick={() => {
                      setChildren(children - 1);
                      if (children === 0) handleCloseGuestsModal();
                    }}
                    disabled={children === 0}
                  >
                    -
                  </button>
                  <span className="guest-count">{children}</span>
                  <button
                    className="guest-button"
                    onClick={() => setChildren(children + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button onClick={filterData}>
          <img src={lupa} alt="Buscar" className='lupa' />
        </button>
      </div>
    </nav>
  );
};

export default Nav;



