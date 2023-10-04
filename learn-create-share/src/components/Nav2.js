import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/NavBar.css"

function Nav2() {
   return (
      <nav class="navbar navb2 navbar-expand-sm ">
         <div class="container-fluid">
            <span class="navbar-brand mb-0 h2">Example Student @ Example School</span>
            <div>
               <ul class="navbar-nav">
                  <li class="nav-item">
                     <a class="navbtn nav-link" href='#'>Create Post</a>
                  </li>
                  <li class="nav-item">
                     <a class="navbtn nav-link" href='#'>Draft Posts</a>
                  </li>
                  <li class="nav-item">
                     <a class="navbtn nav-link" href='#'>Published Posts</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Nav2