module.exports = (app) => {
  const products = require("../controllers/product.controller.js");
  const router = require("express").Router();

  router.get("/", products.findAll);
  router.get("/:id", products.findOne);

  app.use("/api/products", router);
};
