require("dotenv").config({ path: "./config.env" }); //to secure mongo crediantials
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 5000;
const connectDB = require("./db/connect");
const products_routes = require("./routes/products");
const user_routes = require("./routes/users");
app.use(cors());
app.use(express.json());
app.disable("x-powered-by"); //less hacker know about our stack now

//!connect and send data from productJson to mongodb
// require("dotenv").config();
// const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./product.json");

app.get("/", (req, res) => {
  res.send("Hello from server");
});

// app.post("/register", (req, res) => {
//   res.send("This is the signup page");
//   // res.send(req.body);
// });

app.use("/api/products", products_routes);
app.use("/auth", user_routes);
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
