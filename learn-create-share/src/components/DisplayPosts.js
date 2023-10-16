import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Posts.css'
import DraftEditor from './DraftEditor';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayPosts() {
  const IDUser = 321;
  const url = `http://localhost:3000/posts/userID/${IDUser}`;
  const [data, setData] = useState([]);

   useEffect(() => {
     fetch(url)
       .then((response) => response.json())
       .then((data) => { setData(data)})
       .catch((err) => {
        console.log(err.message);
       });
   }, []);

   return (
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