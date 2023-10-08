import React from 'react';
import NavBar from '../components/NavBar';
import Nav2 from '../components/Nav2';
import Widget from '../components/Widget';
import Footer from '../components/Footer';

function CreatePost() {
  return (
  
    <div>
      <NavBar />
      <div class="container text-center">
        <div class="row">
          <Nav2 />
        </div>
        <div class="row">
          <div class="col-9">
              
          </div>
          <div class="col-3">
            <Widget />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default CreatePost