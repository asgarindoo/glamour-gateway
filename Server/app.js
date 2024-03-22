const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userController = require("./app/controllers/user.controller");
const db = require("./app/models");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Gunakan express-session middleware
app.use(
  session({
    secret: "djewr832ijeu3eiwd9j23j",
    resave: false,
    saveUninitialized: true,
  })
);

// Inisialisasi Passport setelah express-session
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/api/auth/redirect/google",
      scope: ["profile", "email"],
      state: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile:", profile);
      try {
        let findUser = await userController.findOne({ googleId: profile.id });
        const user = db.user;

        if (!findUser) {
          let newUser = new user({
            googleid: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });

          await newUser.save();
          return done(null, newUser);
        }

        return done(null, findUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

const mongoURI = process.env.MONGODB_URL;

db.mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas:", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

app.get("/login-failure", (req, res, next) => {
  console.log(req.session);
  res.redirect("http://localhost:8080/login");
});

app.get("/login-success", (req, res) => {
  res.redirect("http://localhost:8080");
});

require("./app/routes/product.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/auth.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
