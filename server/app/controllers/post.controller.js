// Import model
const Post = require("../models/post.model");

/**
 * Controller to get all posts
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getAllPosts = (req, res) => {
  Post.retrieveAllPosts((err, data) => {
    // If an error occurs
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving posts.",
      });
    else res.send(data);
  });
};

/**
 * Controller to create a new post
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.createPost = (req, res) => {
  //If no data is inserted, display error
  if (!req.body) {
    res.status(400).send({ message: "Content for creating post is empty!" });
  }

  // Get new Post values
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    published: req.body.published,
    userID: req.body.userID,
  });

  // Insert the post into the database
  Post.createNewPost(post, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    else res.send(data);
  });
};

/**
 * Controller to remove a post by a post ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.removePostByID = (req, res) => {
  //if no id is taken display error
  if (!req.params.postID) {
    res.status(400).send({ message: "No id added" });
  }

  // Get the post ID
  const postID = req.params.postID;

  // Remove the post from the database
  Post.removeByID(postID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    else res.send(data);
  });
};

/**
 * Controller to get a post by it's ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getPostByID = (req, res) => {
  //if no id is taken display error
  if (!req.params.postID) {
    res.status(400).send({ message: "No id added" });
  }

  // Get the post ID
  const postID = req.params.postID;

  // Get the post from the database
  Post.getByID(postID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while getting the post.",
      });
    else res.send(data);
  });
};

/**
 * Controller to edit a post by it's ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.editPostByID = (req, res) => {
  // If no body is taken dsplay error
  if (!req.body || !req.params) {
    res.status(400).send({ message: "Content for editing is empty!" });
  }

  // Initialise parameters
  const title = req.body.title;
  const content = req.body.content;
  const published = req.body.published;

  // Post to edit
  const postID = req.params.postID;

  // Edit the post in the database
  Post.editByID([title, content, published, postID], (err, data) => {
    // Display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while editing the Post.",
      });
    else res.send(data);
  });
};

/**
 * Controller to get all posts from a class (classID)
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getPostsByClass = (req, res) => {
  //if no id is taken display error
  if (!req.params.classID) {
    res.status(400).send({ message: "No id added" });
  }

  // Get the class ID
  const classID = req.params.classID;

  // Get the posts from the database
  Post.getByClass(classID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while getting the posts.",
      });
    else res.send(data);
  });
};

/**
 * Controller to get all posts from a user
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.getPostsByUser = (req, res) => {
  //if no id is taken display error
  if (!req.params.userID) {
    res.status(400).send({ message: "No id added" });
  }

  // Get the user ID
  const userID = req.params.userID;

  // Get the posts from the database
  Post.getByUser(userID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while getting the posts.",
      });
    else res.send(data);
  });
};
