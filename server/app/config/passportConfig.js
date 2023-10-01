const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/user.model");
//const googleSSO = require("./googleSSO.env");

// CHANGE VISIBILY / PERMISSIONS TO THESE LATER
const CLIENT_ID = "1037857344941-iba1om7sfqec5jtkhea0jav89115j721.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

module.exports = (passport) => {

    passport.use(new GoogleStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback : true
      },

      async (request, accessToken, refreshToken, profile, done) => {
        try {
            let existingUser = await User.findUserByGoogleID({ 'google.id': profile.id });
            // if user exists return the user
            if (existingUser) {
              return done(null, existingUser);
            }
            // if user does not exist create a new user
            console.log('Creating new user...');

            const newUser = new User({

                googleID: profile.id,
                fname: profile.displayName,
                lname: profile.email[0].value

            });
            
            await User.createUser(newUser);
            return done(null, newUser);
        } catch (error) {
            return done(error, false)
        }
      }
    ));
}