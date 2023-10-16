import React from 'react';
import Widget from '../components/Widget';
import Posts from '../components/Posts';
import Nav2 from '../components/Nav2';
import DisplayPosts from '../components/DisplayPosts';

function SingleDashboard() {
  return (
  
    <div>
      <div class="container text-center">
        <div class="row">
          <Nav2 />
        </div>
        <div class="row">
          <div class="col-9">
              <DisplayPosts />
              
          </div>
          <div class="col-3">
            <Widget />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SingleDashboard