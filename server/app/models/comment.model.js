const db = require("./db");

const Comment = function(comment){
    this.commentID = comment.classID,
    this.content = comment.content,
    this.published = comment.published,
    this.postID = comment.postID,
    this.userID = comment.userID
};

// Gets all Comments from database
Comment.retrieveAllComments = result =>{

    //Get all query
    db.query("SELECT * FROM Comment", (err, res) =>{

        //if an error occurs, display
        if(err){
            console.log("error:",err);
            return;
        }

        //display the status of the request if there is not error
        console.log("Comments: ", res);
        result(null, res);
    });
};

// Gets a comment by its ID
Comment.getByID = (commentID, result) =>{

    // Select query
    db.query("SELECT * FROM Comment where commentID=?", commentID, (err, res) =>{

        // If an error occurs, display.
        if(err){
            console.log("error:",err);
            return;
        }

        // Display the status of the request if there is not error.
        console.log("Comment: ", res);
        result(null, res);
    });
};

// Gets a comment by user
Comment.getByUser = (userID, result) =>{

    // Select query
    db.query("SELECT * FROM Comment where userID=?", userID, (err, res) =>{

        // If an error occurs, display.
        if(err){
            console.log("error:",err);
            return;
        }

        // Display the status of the request if there is not error.
        console.log("Comments: ", res);
        result(null, res);
    });
};

// Gets a comment by post
Comment.getByPost = (postID, result) =>{

    // Select query
    db.query("SELECT * FROM Comment where postID=?", postID, (err, res) =>{

        // If an error occurs, display.
        if(err){
            console.log("error:",err);
            return;
        }

        // Display the status of the request if there is not error.
        console.log("Comments: ", res);
        result(null, res);
    });
};

// Inserts a new comment into the database
Comment.createNewComment = (newComment, result) =>{

    // Insert Query
    db.query("INSERT INTO Comment SET?", newComment, (err, res) =>{

        //if an error occurs display
        if(err){
            console.log("Error:",err); 
            result(err,null); 
            return;
        }

        // Display the status of the insertion if no error occured 
        console.log("Created comment: ",{commentID: res.commentID,...newComment});
        result(null,{commentID: res.commentID,...newComment});
    });
};

// Remove a comment from the database
Comment.removeByID = (commentID, result) =>{

    // Remove query
    db.query("DELETE FROM Comment where commentID=?", commentID, (err, res) =>{

        //if an error occurs, display
        if(err){
            console.log("error:",err);
            return;
        }

        //display the status of the request if there is not error
        console.log("Removed comment with ID: ${classID}");
        result(null, res);
    });
};


module.exports = Comment;