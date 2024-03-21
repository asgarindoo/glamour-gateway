const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Gunakan express-session middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Inisialisasi Passport setelah express-session
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

const mongoURI = process.env.MONGODB_URL;

const db = require("./app/models");
require("./app/config/auth")(passport);

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
  res.send("Login Attempt Failed.");
});

app.get("/login-success", (req, res) => {
  res.send(req.user);
});

require("./app/routes/product.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/auth.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
