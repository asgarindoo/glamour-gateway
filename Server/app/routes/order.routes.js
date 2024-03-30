module.exports = (app) => {
  const orders = require("../controllers/order.controller");
  const router = require("express").Router();

  // Create a new order
  router.post("/orders", orders.createOrder);

  // Get all orders
  router.get("/orders", orders.getAllOrders);

  // Get a single order by ID
  router.get("/orders/:id", orders.getOrderById);

  // Update an order by ID
  router.put("/orders/:id", orders.updateOrderById);

  // Delete an order by ID
  router.delete("/orders/:id", orders.deleteOrderById);

  app.use("/api", router);
};

// module.exports = (app) => {
//   const orders = require("../controllers/order.controller.js");
//   const router = require("express").Router();

//   router.get("/user/:id", orders.findOrder);
//   router.post("/user/:id/add", orders.addToCart);
//   router.delete("/user/:id/product/:product", orders.removeFromCart);

//   app.use("/api/orders", router);
// };
