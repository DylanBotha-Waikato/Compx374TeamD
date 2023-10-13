
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import "../styles/NavBar.css";
import Logo from "../assets/Kitenga-Hook-Black.png";
//import LoginButton from "./LoginButton";


function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-sm ">
      <div class="navContent container-fluid">
        <Link class="navbar-brand" to="/SingleDashboard"><img src={Logo} alt="Hook Logo" width="16" height="23" class="logo d-inline-block align-text-top"/>
        Learn Create Share</Link>
        {/*<a class="navbar-brand" href="#">
          <img src={Logo} alt="Hook Logo" width="16" height="23" class="logo d-inline-block align-text-top"/>
  Learn Create Share</a>*/}
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link" to="/SingleDashboard">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Details">Details</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/CreatePost">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  )
}

export default NavBar