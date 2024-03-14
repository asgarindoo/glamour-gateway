const db = require("../models");

const product = db.product;

exports.findAll = (req, res) => {
  product
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};

exports.findOne = (req, res) => {
  product
    .findOne({
      _id: req.params.id,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products.",
      });
    });
};
