const db = require("./db");

const User = function (user) {
  this.userID = user.userID;
  this.googleID = user.googleID;
  this.fname = user.fname;
  this.lname = user.lname;
  this.profilePicture = user.profilePicture;
  this.classID = user.classID;
  this.role = user.role;
};

//Gets all the projects from the database
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

//Edit a user by their id
User.editById = (editedData, result) => {
  //Execute the query to edit the user
  db.query(
    "UPDATE Users SET googleID=?, fname=?, lname=?, profilePicture=?, classID=?, role=? WHERE userID=?",
    editedData,
    (err, res) => {
      //If erroroccurs, display
      if (err) {
        console.log("Error:", err);
        result(err, null);
        return;
      }

      //else, display the results
      console.log("User has been updated by id", res);
      result(null, res);
    }
  );
};

module.exports = User;
