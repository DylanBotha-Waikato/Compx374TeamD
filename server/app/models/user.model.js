const db = require("./db");


const User = function(user) {
    this.id = user.id;
    this.fname = user.fname;
    this.lname = user.lname;
};

User.create = (newUser, result) => {
db.query("INSERT INTO user(fname, lname) SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.getAll = (result) => {
  
  let query = "SELECT * FROM users";

  db.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("users: ", res);
      result(null, res);
    });
};

module.exports = User;