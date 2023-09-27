const User = require("../models/user.model");

// Create and Save a new user
exports.create = (req, res) => {
    
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const user = new User({
    id: req.body.id,
    fname: req.body.fname,
    lname: req.body.lname
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.getAll = (req, res) => {

    const id = req.query.id;

    User.getAll(id, (err, data) => {
    if (err)
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving users."
        });
    else res.send(data);
    });
};
