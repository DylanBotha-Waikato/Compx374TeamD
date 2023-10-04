import React from 'react'

import "../styles/NavBar.css"

function NavBar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <Link to="/" className="logoImage" style={{backgroundImage: `url(${Logo}` }}>
        </Link>
        <Link to="/">Learn Create Share</Link>
      </div>
      <div className='rightSide'>
        <Link to="http://localhost:3000/auth/google">
          <AccountCircleIcon/>
        </Link>
        <Link to="/">
          <MoreVertIcon/>
        </Link>
        <Link to="/">
          <TravelExploreIcon/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar