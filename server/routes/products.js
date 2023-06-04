// products route
// Path: server/routes/products.js
const router = require("express").Router();

let Product = require("../models/Product.model");
let Order = require("../models/Order.model");

// get all products
router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add a product
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);

  const newProduct = new Product({
    name,
    quantity,
    price,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get a product by id
router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete a product by id
router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/orders").post((req, res) => {
  const products = req.body.products;
  const username = req.body.username;
  console.log(products);
  // remove the quantity of each product ordered from the database and calculate the bill
  let bill = 0;
  products.forEach((product) => {
    Product.findById(product._id)
      .then((p) => {
        bill += product.price * product.quantity;
        p.quantity -= product.quantity;
        p.save();
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
  // create a new order
  // TODO: bill is 0
  const newOrder = new Order({
    products,
    username,
    bill,
    date: Date.now(),
  });
  newOrder
    .save()
    .then(() => res.json("Order placed successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
