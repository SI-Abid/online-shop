// users route
// Path: server/routes/users.js
const router = require("express").Router();

let User = require("../models/User.model");

// get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add a user
router.route("/add").post((req, res) => {
  // console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    username,
    email,
    password,
  });
  newUser
    .save()
    .then(() => res.status(200).json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get a user by name
router.route("/username/:username").get((req, res) => {
  console.log(req.params);
  User.findOne({ username: req.params.username })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get a user by email
router.route("/email/:email").get((req, res) => {
  console.log(req.params);
  User.findOne({ email: req.params.email })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete a user by name
router.route("/:username").delete((req, res) => {
  User.findOneAndDelete({ username: req.params.username })
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
