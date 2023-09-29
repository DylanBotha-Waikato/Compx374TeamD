const db = require("./db");

const Post = function(post){
    this.postID = post.postID;
    this.title = post.title;
    this.content = post.content;
    this.published = post.published;
    this.userID = post.userID;
};

// Gets all Posts from database
Post.retrieveAllPosts = result =>{

    //Get all query
    db.query("SELECT * FROM Post", (err, res) =>{

        //if an error occurs, display
        if(err){
            console.log("error:",err);
            return;
        }

        //display the status of the request if there is not error
        console.log("Posts: ", res);
        result(null, res);
    });
};

// Inserts a new post into the database
Post.createNewPost = (newPost, result) =>{

    // Insert Query
    db.query("INSERT INTO Post SET?", newPost, (err, res) =>{

        //if an error occurs display
        if(err){
            console.log("Error:",err); 
            result(err,null); 
            return;
        }

        // Display the status of the insertion if no error occured 
        console.log("Created Post",{postID: res.postID,...newPost});
        result(null,{postID: res.postID,...newPost});
    });
};

// Remove a post from the database
Post.removeByID = (postID, result) =>{

    // Remove query
    db.query("DELETE FROM Post where postID=?", postID, (err, res) =>{

        //if an error occurs, display
        if(err){
            console.log("error:",err);
            return;
        }

        //display the status of the request if there is not error
        console.log("Removed post with ID: ${postID}");
        result(null, res);
    });
};

// Get a post from the database
Post.getByID = (postID, result) =>{

    // Select query
    db.query("SELECT * FROM Post where postID=?", postID, (err, res) =>{

        // If an error occurs, display.
        if(err){
            console.log("error:",err);
            return;
        }

        // Display the status of the request if there is not error.
        console.log("Post: ", res);
        result(null, res);
    });
};

Post.editByID = (editedData, result) =>{

    // Edit the Post in the database
    db.query("UPDATE Post SET title=?, content=?, published=? WHERE postID=?", editedData, (err,res) => {
    
    //If erroroccurs, display 
    if(err){
        console.log("Error:",err); 
        result(err,null); 
        return;
    }

    //else, display the results
    console.log("Post has been updated by id", res);
    result(null, res);
    });
};

// Get all posts by a user from the database
Post.getByUser = (userID, result) =>{

    // Select query
    db.query("SELECT * FROM Post where userID=?", userID, (err, res) =>{

        // If an error occurs, display.
        if(err){
            console.log("error:",err);
            return;
        }

        // Display the status of the request if there is not error.
        console.log("Posts: ", res);
        result(null, res);
    });
};

// Get all posts by a class from the database
Post.getByClass = (classID, result) =>{

    // Create query
    const query = "SELECT postID, title, content, published, Post.userID FROM Post LEFT JOIN Users ON Post.userID = Users.userID where Users.classID=?"

    // Select query
    db.query(query, classID, (err, res) =>{

        // If an error occurs, display.
        if(err){
            console.log("error:",err);
            return;
        }

        // Display the status of the request if there is not error.
        console.log("Posts: ", res);
        result(null, res);
    });
};

module.exports = Post;