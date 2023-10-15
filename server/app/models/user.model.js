// Import modules
const db = require("./db");

const User = function (user) {
  this.userID = user.userID;
  this.googleID = user.googleID;
  this.fname = user.fname;
  this.lname = user.lname;
  this.profilePicture = user.profilePicture;
  this.classID = user.classID;
  this.roles = user.roles;
};

/**
 * Gets all the users in the MySQL database
 * @param {*} result - Callback Function
 */
User.retrieveAllUsers = (result) => {
  //execute retrieval query
  db.query("select * from Users", (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }

    //display the status of the request if there is not error
    console.log("Users: ", res);
    result(null, res);
  });
};

/**
 * Finds a user based on their User ID
 * @param {number} userID   - ID of user to find
 * @param {function} result - Callback function
 */
User.findUserByID = (userID, result) => {
  //Retrieval query
  db.query("SELECT * FROM Users where userID=?", userID, (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }
    //Display result of query
    console.log("User: ", res);
    result(null, res);
  });
};

/**
 * Finds a user based on their Google ID
 * @param {number} googleID  - Google ID of user to find
 * @param {function} result  - Callback function
 */
User.findUserByGoogleID = (googleID, result) => {
  //Retrieval query
  db.query("SELECT * FROM Users where googleID=?", googleID, (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }
    //Display result of query
    console.log("User: ", res);
    result(null, res);
  });
};

/**
 * Removes the user specified by userID from the MySQL database
 * @param {number} userID   - The ID of the user to be removed
 * @param {function} result - Callback function
 */
User.removeUserByID = (userID, result) => {
  //Delete query
  db.query("DELETE FROM Users where userID=?", userID, (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }
    //Display result of query
    console.log("Project ${userID} was successfully deleted");
    result(null, res);
  });
};

/**
 * Inserts a new user into MySQL database
 * @param {User} newUser   - The User object to insert
 * @param {function} result  - Callback function
 */
User.createUser = (newUser, result) => {
  // New query
  db.query("INSERT into Users SET?", newUser, (err, res) => {
    //if an error occurs display
    if (err) {
      console.log("Error:", err);
      return;
    }
    //display the status of the insertion if no error occured
    console.log("Created User", { googleID: res.googleID, ...newUser });
    result(null, { googleID: res.googleID, ...newUser });
  });
};

/**
 * Takes an sql query and set of values to edit a user row
 * @param {String} sql      - The pre-constructed SQL query
 * @param {Array} values    - Values to insert with query
 * @param {function} result - Callback function
 */
User.editById = (sql, values, result) => {
  // Execute the query to edit the user
  db.query(sql, values, (err, res) => {
    if (err) {
      console.log("Error:", err);
      result(err, null);
      return;
    }
    // Display status of edit
    console.log("User has been updated by id", res);
    result(null, res);
  });
};

module.exports = User;
