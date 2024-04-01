module.exports = (app) => {
  const carts = require("../controllers/cart.controller");
  const router = require("express").Router();

  // Add a product to the cart
  router.post("/cart/:sub", carts.addToCart);
  // Get all cart items
  router.get("/cart", carts.getAllCartItems);

  // Get a single cart item by ID
  router.get("/cart/:sub", carts.getCartItemBySub);

  //   // Update a cart item by ID
  //   router.put("/cart/:id", carts.updateCartItemById);

  //   // Delete a cart item by ID
  //   router.delete("/cart/:id", carts.deleteCartItemById);

  app.use("/api", router);
};
