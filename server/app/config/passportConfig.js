const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/user.model");
const db = require("../models/db")
//const googleSSO = require("./googleSSO.env");

// CHANGE VISIBILY / PERMISSIONS TO THESE LATER
const CLIENT_ID = "1037857344941-iba1om7sfqec5jtkhea0jav89115j721.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

module.exports = (passport, res) => {

    passport.use(new GoogleStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback : true
      },

      async (request, accessToken, refreshToken, profile, done) => {
        try {
            let existingUser = db.query("SELECT * from Users where googleID=?", profile.id);
            // if user exists return the user
            if (existingUser) {
              return done(null, existingUser);
            }
            else{
              // if user does not exist create a new user
              console.log('Creating new user...');
              
              // Split display name for fname/lname
              const names = profile.displayName.split(" ");

              // Create a new user from profile information
              const newUser = new User({
                  googleID: profile.id,
                  fname: names[0],
                  lname: names[1],
                  profilePicture: profile.picture,
              });
              
              //execute insertion
              User.createUser(newUser,(err,data)=>{
                  res.send(data);
              });

              return done(null, newUser);
            }
        } catch (error) {
            return done(error, false)
        }
      }
    ));
}