const User = require("../models/user.model");

//The controller to get all users
exports.findAll = (req, res) => {
  //execute retrieval
  User.retrieveAllUsers((err, data) => {
    //display error
    if (err)
      res
        .status(500)
        .send({
          message: err.message || "Some error occurred while retrieving users.",
        });
    else res.send(data);
  });
};

//The controller to get a user by their ID
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
      res
        .status(500)
        .send({
          message: err.message || "Some error occurred while getting the user.",
        });
    else res.send(data);
  });
};

//The controller to get a user by their google ID
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
      res
        .status(500)
        .send({
          message: err.message || "Some error occurred while getting the user.",
        });
    else res.send(data);
  });
};

//The controller to remove a user by their ID
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
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while creating the user.",
        });
    else res.send(data);
  });
};

//The controller to create a user
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
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while creating the user.",
        });
    else res.send(data);
  });
};

//The controller to edit a user
exports.editUserByID = (req, res) => {
  //if no body is taken dsplay error
  if (!req.body) {
    res.status(400).send({ message: "Content for editing is empty!" });
  }

  //Initialise parameters
  const googleID = req.body.googleID;
  const username = req.body.username;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const profilePicture = req.body.profilePicture;
  const classID = req.body.classID;

  //execute the edting
  User.editById(
    [googleID, username, fname, lname, profilePicture, classID],
    (err, data) => {
      //display error
      if (err)
        res
          .status(500)
          .send({
            message:
              err.message || "Some error occurred while editing the user.",
          });
      else res.send(data);
    }
  );
};
