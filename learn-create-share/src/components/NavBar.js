import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import "../styles/NavBar.css"

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm ">
      <div class="navContent container-fluid">
        <a class="navbar-brand" href="#">Learn Create Share</a>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href='#'>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href='#'>Details</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href='#'>Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar