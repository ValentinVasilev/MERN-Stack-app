const express = require("express");
const router = express.Router();

// MongoDB models
const UserModel = require("../models/UserModel");
const FollowerModel = require("../models/FollowerModel");
const ProfileModel = require("../models/ProfileModel");

const jwt = require("jsonwebtoken"); // JSON Web Token
const bcrypt = require("bcryptjs"); // Ecnrypt the password.
const isEmail = require("validator/lib/isEmail"); // Validate if the input Email is Valid Email address.


router.post("/", async (req, res) => {
  // Inside the Body we send the User object.
  const { email, password } = req.body.user;

  // Check if email is valid
  if (!isEmail(email)) return res.status(401).send("Invalid Email Address");

  // Check on password length
  if (password.length < 6) {
    return res.status(401).send("Password must be atleast 6 characters");
  }

  try {
    // Because in our UserModel on field "password" we set "Selected:false", here we have include it so we can search for the Email and Password.
    user = await UserModel.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    // If User is not found
    if (!user) {
      return rest.status(401).send("Invalid Credentials");
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!password) {
      return res.status(401).send("Invalid Credentials");
    }

    // Here we send the Token to the Frond End
    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.log(err);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
