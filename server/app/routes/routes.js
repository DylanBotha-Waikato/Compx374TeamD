module.exports = app => {

  const users = require("../controllers/user.controller");
  const posts = require("../controllers/post.controller");

  app.route("/users")
    .get(users.findAll)               // The router to get all of the projects
    .post(users.create);              // The router to create a new user

  app.route("/users/userID/:userID")
    .get(users.findByID)              // The router to get the user by their id 
    .delete(users.removeByID)         // The router to remove a specific user
    .put(users.editUserByID);         // The router to edit user details by their id  | needs fixing

  app.route("/posts")
    .get(posts.getAllPosts)           // The router to get all posts
    .post(posts.createPost);          // The router to create a new post

  app.route("/posts/postID/:postID")
    .get(posts.getPostByID)           // The router to get posts by ID
    .delete(posts.removePostByID)     // The router to remove posts by ID
    .put(posts.editPostByID);         // The router to edit posts by ID

  app.route("/posts/userID/:userID")
    .get(posts.getPostsByUser);      // The router to get all posts made by a user

    app.route("/posts/classID/:classID")
    .get(posts.getPostsByClass);      // The router to get all posts made by a class

}