// Setup Express
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();

// Use express-session middleware before passport initialization
app.use(
  session({
    secret: process.env.GOOGLE_SECRET, // Replace with a client secret
    resave: false,
    saveUninitialized: true,
  })
);

// To help with accessing this server from Postman
app.use(cors());

// To help with POST and PUT requests to the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Google SSO
const passport = require("passport");
require("./app/config/passportConfig")(passport);

app.use(passport.initialize());
app.use(passport.session());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

require("./app/routes/routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`CORS enabled Express web server is running on port ${PORT}.`);
});
