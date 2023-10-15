const User = require("../models/user.model");

/**
 * Controller to get all users
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.findAll = (req, res) => {
  //execute retrieval
  User.retrieveAllUsers((err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    else res.send(data);
  });
};

/**
 * Controller to find a user by their User ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.findByID = (req, res) => {
  //If no data is inserted, display error
  if (!req.body) {
    res.status(400).send({ message: "ID is empty" });
  }

  //Get user id
  const userID = req.params.userID;

  //Send data to model
  User.findUserByID(userID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while getting the user.",
      });
    else res.send(data);
  });
};

/**
 * Controller to find a user by their Google ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.findByGoogleID = (req, res) => {
  //If no data is inserted, display error
  if (!req.params) {
    res.status(400).send({ message: "ID is empty" });
  }

  //Get user id
  const googleID = req.params.googleID;

  //Send data to model
  User.findUserByGoogleID(googleID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while getting the user.",
      });
    else res.send(data);
  });
};

/**
 * Controller to create a new user
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.removeByID = (req, res) => {
  //If no data is inserted, display error
  if (!req.body) {
    res.status(400).send({ message: "ID is empty" });
  }

  //Get user id
  const userID = req.params.userID;

  //Send data to model
  User.removeUserByID(userID, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    else res.send(data);
  });
};

/**
 * Controller to create a new user
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.create = (req, res) => {
  //If no data is inserted, display error
  if (!req.body) {
    res.status(400).send({ message: "Content for creating user is empty!" });
  }

  //setting up a new user
  const user = new User({
    googleID: req.body.googleID,
    fname: req.body.fname,
    lname: req.body.lname,
    profilePicture: req.body.profilePicture,
    classID: req.body.classID,
    role: req.body.role,
  });

  //execute insertion
  User.createUser(user, (err, data) => {
    //display error
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    else res.send(data);
  });
};

/**
 * Controller to edit a user by their user ID
 * @param {object} req - Express.js request object
 * @param {object} res - Express.js response object
 * @returns {void}
 */
exports.editUserByID = (req, res) => {
  // Get Input
  const userID = req.params.userID;
  const updateFields = req.body;

  // Check if userID is given
  if (!userID) {
    res.status(400).send({ message: "User ID is missing." });
    return;
  }

  // Check if at least one field is given
  if (Object.keys(updateFields).length === 0) {
    res.status(400).send({ message: "No fields to update specified." });
    return;
  }

  // Coloumns available to edit
  const validFields = [
    "googleID",
    "fname",
    "lname",
    "profilePicture",
    "classID",
    "role",
  ];

  // Filter out fields that are not valid
  const validUpdateFields = {};
  for (const field in updateFields) {
    if (validFields.includes(field)) {
      validUpdateFields[field] = updateFields[field];
    }
  }

  // Check if at least one valid field is given
  if (Object.keys(validUpdateFields).length === 0) {
    res.status(400).send({ message: "No valid fields to update specified." });
    return;
  }

  const updateValues = [];
  const updateSets = [];

  // Format the set and value pairs
  for (const field in validUpdateFields) {
    updateSets.push(`${field} = ?`);
    updateValues.push(validUpdateFields[field]);
  }

  // Construct the SQL query
  const sql = `UPDATE Users SET ${updateSets.join(", ")} WHERE userID = ?`;
  updateValues.push(userID);

  // Execute the query
  User.editById(sql, updateValues, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while editing the user.",
      });
    } else {
      res.send(data);
    }
  });
};
