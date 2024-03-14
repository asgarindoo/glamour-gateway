const dbconfig = require("../../config/db.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbconfig.url;
db.product = require("./product.model.js")(mongoose);
db.order = require("./order.models.js")(mongoose);

module.exports = db;
