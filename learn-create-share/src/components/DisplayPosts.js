import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Posts.css'
import DraftEditor from './DraftEditor';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayPosts() {
  //Variable to hold the users id which should be fetched from log in
  const IDUser = 321;
  //The url that is used to make the call to the server
  const url = `http://localhost:3000/posts/userID/${IDUser}`;
  const [data, setData] = useState([]);

  //Fetches the users posts from the server and displays them on the page
   useEffect(() => {
     fetch(url)
       .then((response) => response.json())
       .then((data) => { setData(data)})
       .catch((err) => {
        //error message to console
        console.log(err.message);
       });
   }, []);

   return (
    //displays the post as a card on the page
     <div>
       {data.map((item) => (
         <div class="post" key={item.id}>
            <h3 class="postTitle">{item.title}</h3>
            <p class="postAuthor">{item.userID}</p>
            <div>
               <p class="postContent">{item.content}</p>
            </div>
            <div class="comment">
               <DraftEditor />
            </div>
         </div>
       ))}
     </div>
   );
}

export default DisplayPosts;