const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    enum: {
      values: [
        "apple",
        "samsung",
        "dell",
        "lenovo",
        "hp",
        "mi",
        "nokia",
        "rolex",
        "asus",
      ],
      message: `{value} is not supported`,
    },
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  colors: {
    type: "array",
    items: {
      type: "string",
      format: "color",
    },
  },
  image: {
    type: "string",
    format: "uri",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  category: {
    type: "string",
    enum: ["mobile", "tablet", "laptop", "accessories", "watch", "computer"],
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});
module.exports = mongoose.model("Product", productSchema);
