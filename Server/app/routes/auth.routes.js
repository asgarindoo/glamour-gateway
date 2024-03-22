module.exports = (app) => {
  const passport = require("passport");
  const router = require("express").Router();

  // // Auth login
  // router.get("/login", (req, res) => {
  //   res.send("login");
  // });

  // Auth logout
  // router.get("/logout", (req, res) => {
  //   req.logout();
  //   res.redirect("http://localhost:8080/login");
  // });

  // Route to initiate Google OAuth2 authentication
  router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  // Route to handle Google OAuth2 callback
  router.get(
    "/redirect/google",
    passport.authenticate("google", {
      failureRedirect: "/login-failure",
      successRedirect: "/login-success",
      failureMessage: true,
    })
  );

  app.use("/api/auth", router);
};
