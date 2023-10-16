const db = require("./db");

const Class = function (_class) {
  (this.classID = _class.classID), (this.className = _class.className);
};

/**
 * Gets all classes from the database
 * @param {function} result - Callback function
 */
Class.retrieveAllClasses = (result) => {
  //Get all query
  db.query("SELECT * FROM Class", (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }
    //display the status of the request if there is not error
    console.log("Classes: ", res);
    result(null, res);
  });
};

/**
 * Gets a class by its ID
 * @param {number} classID  - ID of class
 * @param {function} result - Callback function
 */
Class.getByID = (classID, result) => {
  // Select query
  db.query("SELECT * FROM Class where classID=?", classID, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }

    // Display the status of the request if there is not error.
    console.log("Class: ", res);
    result(null, res);
  });
};

/**
 * Gets a class by its name
 * @param {String} className - Name of class
 * @param {function} result  - Callback function
 */
Class.getByName = (className, result) => {
  // Select query
  db.query("SELECT * FROM Class where className=?", className, (err, res) => {
    // If an error occurs, display.
    if (err) {
      console.log("error:", err);
      return;
    }

    // Display the status of the request if there is not error.
    console.log("Class: ", res);
    result(null, res);
  });
};

/**
 * Inserts a new class into the database
 * @param {Class} newClass  - New class to insert
 * @param {function} result - Callback function
 */
Class.createNewClass = (newClass, result) => {
  // Insert Query
  db.query("INSERT INTO Class SET?", newClass, (err, res) => {
    //if an error occurs display
    if (err) {
      console.log("Error:", err);
      result(err, null);
      return;
    }

    // Display the status of the insertion if no error occured
    console.log("Created Class: ", { classID: res.classID, ...newClass });
    result(null, { classID: res.classID, ...newClass });
  });
};

/**
 * Removes a class from the database by its ID
 * @param {number} classID  - ID of class
 * @param {function} result - Callback function
 */
Class.removeByID = (classID, result) => {
  // Remove query
  db.query("DELETE FROM Class where classID=?", classID, (err, res) => {
    //if an error occurs, display
    if (err) {
      console.log("error:", err);
      return;
    }

    //display the status of the request if there is not error
    console.log("Removed class with ID: ${classID}");
    result(null, res);
  });
};

module.exports = Class;
