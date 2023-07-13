require("dotenv").config(); //to secure mongo crediantials
const express = require("express");
const app = express();
const PORT = process.env.port || 5000;
const connectDB = require("./db/connect");
const products_routes = require("./routes/products");

//!connect and send data from productJson to mongodb
// require("dotenv").config();
// const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./product.json");

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} I am Connected`);
    });
    //! to send data from productJson on mongodb
    // await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
  } catch (err) {
    console.log(err);
  }
};

start();
