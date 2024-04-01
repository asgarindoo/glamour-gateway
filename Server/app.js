const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const db = require("./app/models");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoURI = process.env.MONGODB_URL;

db.mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas:", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

require("./app/routes/product.routes")(app);
require("./app/routes/cart.routes")(app);
require("./app/routes/order.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
