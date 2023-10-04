import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Widget from '../components/Widget';
import Posts from '../components/Posts';

function Home() {
  return (
  
    <div>
      <NavBar />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            hello
          </div>
        </div>
        <div class="row">
            <div class="col-8">
              <Posts />
            </div>
            <div class="col-4">
              <Widget />
            </div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Home