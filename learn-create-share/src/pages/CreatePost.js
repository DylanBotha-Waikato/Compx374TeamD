import React from 'react';
import Widget from '../components/Widget';
import Nav2 from '../components/Nav2';
import DraftEditor from '../components/DraftEditor';
import DisplayPost from '../components/DisplayPosts';


function CreatePost() {
  return (
  
    <div>
      <div class="container text-center">
        <div class="row">
          <Nav2 />
        </div>
        <div class="row">
          <div class="col-9">
            <DisplayPost />
          </div>
          <div class="col-3">
            <Widget />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CreatePost