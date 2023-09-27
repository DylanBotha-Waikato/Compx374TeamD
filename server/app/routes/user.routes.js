module.exports = app => {
  const users = require("../controllers/user.controller");
  var router = require("express").Router();

  router.post("/", users.create);
  router.get("/", users.getAll);

  app.use('/api/users', router);
}