module.exports = app => {

  const users = require("../controllers/user.controller");

  app.route("/users")
    .get(users.findAll)               // The router to get all of the projects
    .post(users.create);              // The router to create a new user

  app.route("/users/userID/:userID")
    .get(users.findByID)              // The router to get the user by their id 
    .delete(users.removeByID)         // The router to remove a specific user
    .put(users.editUserByID);         // The router to edit user details by their id  | needs fixing

}