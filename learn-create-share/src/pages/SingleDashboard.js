import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Widget from '../components/Widget';
import Posts from '../components/Posts';
import Nav2 from '../components/Nav2';

function SingleDashboard() {
  return (
  
    <div>
      <NavBar />
      <div class="container text-center">
        <div class="row">
          <Nav2 />
        </div>
        <div class="row">
          <div class="col-9">
              <Posts />
              <Posts />
          </div>
          <div class="col-3">
            <Widget />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default SingleDashboard