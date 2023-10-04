import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Widget.css'

function Widget() {
   return(
      <div class="widget container text-center">
         <div class="card">
            <div class="card-body">
               <h5 class="card-title">About Me</h5>
               <p class="card-text">Here is a little bit of info about me. I love to watch movies and listen to music etc.</p>
               <a href="#" class="btn btn-primary"></a>
            </div>
         </div>
         <div class="card">
            <div class="card-body">
               <h5 class="card-title">Map</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         </div>
         <div class="card">
            <div class="card-body">
               <h5 class="card-title">External Website</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         </div>
      </div>
   )
}

export default Widget