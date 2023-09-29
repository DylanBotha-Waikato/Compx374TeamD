// Import model
const Post = require("../models/post.model");

// Controller to GET all posts
exports.getAllPosts = (req, res) =>{

    Post.retrieveAllPosts((err, data)=>{

        // If an error occurs 
        if(err)
            res.status(500).send({message:err.message || "Some error occurred while retrieving posts."});
        else 
            res.send(data);
    });
};

// Controller to create a new post
exports.createPost = (req, res) => {

    //If no data is inserted, display error 
    if (!req.body) {
        res.status(400).send({message: "Content for creating post is empty!"});
    }

    // Get new Post values
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        published: req.body.published,
        userID: req.body.userID
    });

    // Insert the post into the database
    Post.createNewPost(post, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while creating the post."});
        else 
            res.send(data);
    });
};

// Controller to remove a specific post
exports.removePostByID = (req, res) => {

    //if no id is taken display error 
    if(!req.params.postID){
        res.status(400).send({message: "No id added"});
    }

    // Get the post ID
    const postID = req.params.postID;

    // Remove the post from the database
    Post.removeByID(postID, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while creating the post."});
        else 
            res.send(data);
    });
};

// Controller to GET a post by its ID
exports.getPostByID = (req, res) => {

    //if no id is taken display error 
    if(!req.params.postID){
        res.status(400).send({message: "No id added"});
    }

    // Get the post ID
    const postID = req.params.postID;

    // Get the post from the database
    Post.getByID(postID, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while getting the post."});
        else 
            res.send(data);
    });
};

// Controller to edit a post by its ID
exports.editPostByID = (req, res) => {

    // If no body is taken dsplay error 
    if (!req.body){
      res.status(400).send({message: "Content for editing is empty!"});
    }

    // Initialise parameters
    const postID = req.params.postID;
    const title = req.body.title;
    const content = req.body.content;
    const published = req.body.published; 
    const userID = req.body.userID;

    // Edit the post in the database
    Post.editByID([postID, title, content, published, userID], (err, data) =>{
        // Display error 
        if (err)
            res.status(500).send({message:err.message || "Some error occurred while editing the Post."});
        else 
            res.send(data);
    });
};

// Controller to get all posts from a class
exports.getPostsByClass = (req, res) => {

    //if no id is taken display error 
    if(!req.params.classID){
        res.status(400).send({message: "No id added"});
    }

    // Get the class ID
    const classID = req.params.classID;

    // Get the posts from the database
    Post.getByClass(classID, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while getting the posts."});
        else 
            res.send(data);
    });
};

// Controller to get all posts from a user
exports.getPostsByUser = (req, res) => {
    
    //if no id is taken display error 
    if(!req.params.userID){
        res.status(400).send({message: "No id added"});
    }

    // Get the user ID
    const userID = req.params.userID;

    // Get the posts from the database
    Post.getByUser(userID, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while getting the posts."});
        else 
            res.send(data);
    });
};