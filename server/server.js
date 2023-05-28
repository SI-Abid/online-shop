const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, { useNewUrlParser: true });

const mongo = mongoose.connection;

mongo.on("connected", () => {
  console.log("MongoDB connected successfully");
});

const Product = require("./models/Product.model");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {});
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
