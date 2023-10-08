const passport = require("passport");
require("../config/passportConfig")(passport);

module.exports = (app) => {
  // Import controllers for each table
  const users = require("../controllers/user.controller");
  const posts = require("../controllers/post.controller");
  const classes = require("../controllers/class.controller");
  const comment = require("../controllers/comment.controller");

  // ----------------------------------------------- Users Routes ----------------------------------------------------//
  app
    .route("/users")
    .get(users.findAll) // The router to get all of the users
    .post(users.create); // The router to create a new user

  app
    .route("/users/userID/:userID")
    .get(users.findByID) // The router to get the user by their id
    .delete(users.removeByID) // The router to remove a specific user
    .put(users.editUserByID); // The router to edit user details by their id  | needs fixing

  app.route("/users/googleID/:googleID").get(users.findByGoogleID); // The router to get the user by their google id

  // -----------------------------------------------------------------------------------------------------------------//

  // ----------------------------------------------- Post Routes -----------------------------------------------------//
  app
    .route("/posts")
    .get(posts.getAllPosts) // The router to get all posts
    .post(posts.createPost); // The router to create a new post

  app
    .route("/posts/postID/:postID")
    .get(posts.getPostByID) // The router to get posts by ID
    .delete(posts.removePostByID) // The router to remove posts by ID
    .put(posts.editPostByID); // The router to edit posts by ID

  app.route("/posts/userID/:userID").get(posts.getPostsByUser); // The router to get all posts made by a user

  app.route("/posts/classID/:classID").get(posts.getPostsByClass); // The router to get all posts made by a class

  // -----------------------------------------------------------------------------------------------------------------//

  // ----------------------------------------------- Class Routes ----------------------------------------------------//
  app
    .route("/class")
    .get(classes.getAllClasses) // The router to get all classes
    .post(classes.createClass); // The router to create a new class

  app
    .route("/class/classID/:classID")
    .get(classes.getByID) // The router to get a class by ID
    .delete(classes.removeClassByID); // The router to remove a class by ID

  app.route("/class/className/:className").get(classes.getByName); // The router to get a class by name

  // -----------------------------------------------------------------------------------------------------------------//

  // ----------------------------------------------- Comment Routes --------------------------------------------------//
  app
    .route("/comment")
    .get(comment.getAllComments) // The router to get all comments
    .post(comment.createComment); // The router to create a new comment

  app
    .route("/comment/commentID/:commentID")
    .get(comment.getByID) // The router to get a comment by ID
    .delete(comment.removeByID); // The router to delete a comment by ID

  app.route("/comment/postID/:postID").get(comment.getByPostID); // The router to get comments by post

  app.route("/comment/userID/:userID").get(comment.getByUserID); // The router to get comments by user

  // -----------------------------------------------------------------------------------------------------------------//

  // -------------------------------------------- Google SSO Routes --------------------------------------------------//
  app
    .route("/auth/google")
    .get(passport.authenticate("google", { scope: ["email", "profile"] }));

  app
    .route("/auth/google/callback")
    .get(passport.authenticate("google", { session: false }), (req, res) => {
      if (req.isAuthenticated()) {
        // User is authenticated, redirect to a success page or profile page
        res.redirect("http://localhost:3001/"); // Redirect to your desired URL
      } else {
        // User is not authenticated (wrong domain)
        res.redirect("http://localhost:3000/auth/google"); // redirect to login error page (need to implement)
      }
    });
};
