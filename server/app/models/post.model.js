const db = require("./db");

const Post = function (post) {
  this.postID = post.postID;
  this.title = post.title;
  this.content = post.content;
  this.published = post.published;
  this.userID = post.userID;
};

/**
 * Gets all posts in the MySQL database
 * @param {function} result - Callback function
 */
Post.retrieveAllPosts = (result) => {
  //Get all query
  db.query("SELECT * FROM Post", (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }
    //display the status of the request if there is not error
    console.log("Posts: ", res);
    result(null, res);
  });
};

/**
 * Inserts a post into the MySQL database
 * @param {Post} newPost  - Post to be inserted
 * @param {function} result - Callback function
 */
Post.createNewPost = (newPost, result) => {
  // Insert Query
  db.query("INSERT INTO Post SET?", newPost, (err, res) => {
    //if an error occurs display
    if (err) {
      console.log("Error:", err);
      result(err, null);
      return;
    }
    // Display the status of the insertion if no error occured
    console.log("Created Post", { postID: res.postID, ...newPost });
    result(null, { postID: res.postID, ...newPost });
  });
};

/**
 * Removes a post from the dabase by it's ID
 * @param {number} postID   - ID of the post to be removed
 * @param {function} result - Callback function
 */
Post.removeByID = (postID, result) => {
  // Remove query
  db.query("DELETE FROM Post where postID=?", postID, (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }
    //display the status of the request if there is not error
    console.log("Removed post with ID: ${postID}");
    result(null, res);
  });
};

/**
 * Gets a post by it's post ID
 * @param {number} postID   - ID of the post to get
 * @param {function} result - Callback function
 */
Post.getByID = (postID, result) => {
  // Select query
  db.query("SELECT * FROM Post where postID=?", postID, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }
    // Display the status of the request if there is not error.
    console.log("Post: ", res);
    result(null, res);
  });
};

/**
 * Edit a post in the database ny its post ID
 * @param {Array} editedData    - Data to be inserted
 * @param {function} result     - Callback Function
 */
Post.editByID = (editedData, result) => {
  // Edit the Post in the database
  db.query(
    "UPDATE Post SET title=?, content=?, published=? WHERE postID=?",
    editedData,
    (err, res) => {
      //If erroroccurs, display
      if (err) {
        console.log("Error:", err);
        result(err, null);
        return;
      }
      //else, display the results
      console.log("Post has been updated by id", res);
      result(null, res);
    }
  );
};

/**
 * Get all posts made by a user
 * @param {number} userID - ID of the user
 * @param {function} result - Callback function
 */
Post.getByUser = (userID, result) => {
  // Select query
  db.query("SELECT * FROM Post where userID=?", userID, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }
    // Display the status of the request if there is not error.
    console.log("Posts: ", res);
    result(null, res);
  });
};

/**
 * Get all posts made by a class
 * @param {number} classID - ID of the class
 * @param {function} result  - Callback function
 */
Post.getByClass = (classID, result) => {
  // Create query
  const query =
    "SELECT postID, title, content, published, Post.userID FROM Post LEFT JOIN Users ON Post.userID = Users.userID where Users.classID=?";

  // Select query
  db.query(query, classID, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }
    // Display the status of the request if there is not error.
    console.log("Posts: ", res);
    result(null, res);
  });
};

module.exports = Post;
