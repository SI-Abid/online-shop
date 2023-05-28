// products route
// Path: server/routes/products.js
const router = require("express").Router();

let Product = require("../models/Product.model");

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



module.exports = router;