const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

const db = {};

db.mongoose = mongoose;
db.product = require("./product.model.js")(mongoose);
db.order = require("./order.models.js")(mongoose);

module.exports = db;
