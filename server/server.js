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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
