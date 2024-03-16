const db = require("../models");

const Order = db.order;
const Product = db.product;

exports.findOrder = (req, res) => {
  const id = Number(req.params.id);

  Order.aggregate([
    {
      $match: {
        user_id: id,
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "cart_items",
        foreignField: "productId",
        as: "products",
      },
    },
  ])
    .then((result) => {
      if (!result || result.length === 0) {
        return res.status(404).send({
          message: "Order not found",
        });
      }

      const productIds = result[0].cart_items;

      Product.find({ _id: { $in: productIds } })
        .then((productResult) => {
          result[0].products = productResult;
          res.send(result);
        })
        .catch((err) => {
          console.error("Error retrieving products:", err);
          res.status(500).send({
            message: "An error occurred while retrieving products.",
            error: err.message || "Internal server error",
          });
        });
    })
    .catch((err) => {
      console.error("Error retrieving order:", err);
      res.status(500).send({
        message: "An error occurred while retrieving order.",
        error: err.message || "Internal server error",
      });
    });
};

exports.addToCart = (req, res) => {
  const id = Number(req.params.id);
  const productId = String(req.body.product);

  Order.updateOne(
    { user_id: id },
    {
      $addToSet: {
        cart_items: productId,
      },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message,
      });
    });
};

exports.removeFromCart = (req, res) => {
  const id = Number(req.params.id);
  const productId = String(req.params.product);

  Order.updateOne(
    { user_id: id },
    {
      $pull: {
        cart_items: productId,
      },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message,
      });
    });
};
