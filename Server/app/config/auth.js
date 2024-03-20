// Contoh auth.js
const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://localhost:8000/oauth2/redirect/google",
        scope: ["profile"],
        state: true,
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        return done(null, profile);
      }
    )
  );
};
