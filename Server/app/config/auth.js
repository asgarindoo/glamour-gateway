const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("../models");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8000/oauth2/redirect/google",
        scope: ["profile"],
        state: true,
      },
      function (accessToken, refreshToken, profile, done) {
        const newUser = new db.user({
          name: profile.displayName,
          googleid: profile.id,
        });

        console.log("info user: ", newUser);

        newUser.save((err, savedUser) => {
          if (err) {
            console.error("Error saving new user:", err);
            return done(err, false);
          }
          console.log("New user saved:", savedUser);
          return done(null, savedUser);
        });
      }
    )
  );
};
