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

  router.get("google/redirect", (req, res) => {
    res.send("redirected");
  });

  app.use("/api/auth", router);
};
