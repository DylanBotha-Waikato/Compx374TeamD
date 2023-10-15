const db = require("./db");

const Comment = function (comment) {
  (this.commentID = comment.classID),
    (this.content = comment.content),
    (this.published = comment.published),
    (this.postID = comment.postID),
    (this.userID = comment.userID);
};

/**
 * Get all comments in database
 * @param {function} result - Callback function
 */
Comment.retrieveAllComments = (result) => {
  //Get all query
  db.query("SELECT * FROM Comment", (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }
    //display the status of the request if there is not error
    console.log("Comments: ", res);
    result(null, res);
  });
};

/**
 * Gets a comment by it's ID
 * @param {number} commentID - ID of comment
 * @param {function} result  - Callback function
 */
Comment.getByID = (commentID, result) => {
  // Select query
  db.query("SELECT * FROM Comment where commentID=?", commentID, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }
    // Display the status of the request if there is not error.
    console.log("Comment: ", res);
    result(null, res);
  });
};

/**
 * Gets all comments made by a user
 * @param {number} userID   - ID of user
 * @param {function} result - Callback function
 */
Comment.getByUser = (userID, result) => {
  // Select query
  db.query("SELECT * FROM Comment where userID=?", userID, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }

    // Display the status of the request if there is not error.
    console.log("Comments: ", res);
    result(null, res);
  });
};

/**
 * Gets comments by its parent post
 * @param {number} postID   - ID of post
 * @param {function} result - Callback function
 */
Comment.getByPost = (postID, result) => {
  // Select query
  db.query("SELECT * FROM Comment where postID=?", postID, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }

    // Display the status of the request if there is not error.
    console.log("Comments: ", res);
    result(null, res);
  });
};

/**
 * Inserts new comment into database
 * @param {Comment} newComment - New comment object to be inserted
 * @param {function} result   - Callback function
 */
Comment.createNewComment = (newComment, result) => {
  // Insert Query
  db.query("INSERT INTO Comment SET?", newComment, (err, res) => {
    //if an error occurs display
    if (err) {
      console.log("Error:", err);
      result(err, null);
      return;
    }

    // Display the status of the insertion if no error occured
    console.log("Created comment: ", {
      commentID: res.commentID,
      ...newComment,
    });
    result(null, { commentID: res.commentID, ...newComment });
  });
};

/**
 * Removes a comment by its ID
 * @param {number} commentID - ID of comment
 * @param {function} result  - Callback function
 */
Comment.removeByID = (commentID, result) => {
  // Remove query
  db.query("DELETE FROM Comment where commentID=?", commentID, (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }

    //display the status of the request if there is not error
    console.log("Removed comment with ID: ${classID}");
    result(null, res);
  });
};

module.exports = Comment;
