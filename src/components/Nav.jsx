import './Nav.css'


const Nav = () => {
  return (
    
     <nav>
      
      <a href="#" className="logo">airbnb</a>
      
      <div className='inputs'>
        <input className='locationInput' type="text" placeholder='LOCATION' />
        <input className='guestsInput' type="text" placeholder='Add Guests' />
        <button>
          <img src="#" alt="search"  />
        </button>
      </div>
      </nav>
  

  )
}

export default Nav
