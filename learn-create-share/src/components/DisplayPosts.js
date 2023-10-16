import React from "react";
import { useState, useEffect } from "react";
import "../styles/Posts.css";
import DraftEditor from "./DraftEditor";
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
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
