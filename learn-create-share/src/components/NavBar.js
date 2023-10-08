<<<<<<< Updated upstream
import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/Ako-Hook-Large.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";
import Logo from "../assets/Kitenga-Hook-Black.png";
import LoginButton from "./LoginButton";
>>>>>>> Stashed changes

import "../styles/NavBar.css"

function NavBar() {
  return (
<<<<<<< Updated upstream
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
=======
    <nav class="navbar navbar-expand-sm ">
      <div class="navContent container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={Logo}
            alt="Hook Logo"
            width="16"
            height="23"
            class="logo d-inline-block align-text-top"
          />
          Learn Create Share
        </a>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Details
              </a>
            </li>
            <li class="nav-item">
              <LoginButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
>>>>>>> Stashed changes
}

export default NavBar;
