import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Posts() {
   return(
      <div>
         <div class="post">
            <h3>Post Title 1</h3>
            <p>By author....</p>
            <div class="postContent">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisl justo, consectetur a semper at, suscipit et justo. 
                  Praesent sed venenatis nulla. Donec blandit lectus enim, ultricies laoreet ligula tristique sit amet. Donec quis volutpat tellus. 
                  Praesent iaculis nisl ante, non sollicitudin turpis mattis sit amet. Nam viverra ex urna, eget placerat ex mattis sed. Nullam nunc
                   lectus, vehicula vitae vulputate eget, pulvinar at ex. Maecenas posuere mauris bibendum, sagittis velit sit amet, commodo ipsum. </p>
            </div>
            <div class="comment">
               Comment...
            </div>
         </div>
      </div>
   )
}

export default Posts