import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/NavBar.css"
import Logo from "../assets/Kitenga-Hook-Black.png"

console.log(Logo);

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm ">
      <div class="navContent container-fluid">
        <a class="navbar-brand" href="#">
          <img src={Logo} alt="Hook Logo" width="16" height="23" class="logo d-inline-block align-text-top"/>
        Learn Create Share</a>
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