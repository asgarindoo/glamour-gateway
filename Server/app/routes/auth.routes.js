module.exports = (app) => {
  const passport = require("passport");
  const router = require("express").Router();

  //auth login
  router.get("/login", (req, res) => {
    res.send("login");
  });

  //auth logout
  router.get("/logout", (req, res) => {
    res.send("logging out");
  });

  router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  app.get(
    "/oauth2/redirect/google",
    passport.authenticate("google", {
      failureRedirect: "/login-failure",
      successRedirect: "/login-success",
      failureMessage: true,
    })
  );

  app.use("/api/auth", router);
};
