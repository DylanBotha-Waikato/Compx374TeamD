import React from 'react'

import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='topButtons'>
        <button><h3>Sign up</h3></button>
        <button><h3>Login</h3></button>
      </div>
      <div className='mainContent'>
        <div className='homeTitle'><h1>Blogging for Students</h1></div>
        <div className='branding'>right side</div>
      </div>
      <div className='bottomButtons'>

      </div>
      
    </div>
  )
}

export default Home