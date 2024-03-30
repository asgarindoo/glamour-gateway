module.exports = (app) => {
  const products = require("../controllers/product.controller");
  const router = require("express").Router();

  router.get("/products", products.findAll);
  router.get("/products/:id", products.findOne);

  app.use("/api", router);
};
