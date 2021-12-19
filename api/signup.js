const express = require("express");
const router = express.Router();

// MongoDB models
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const FollowerModel = require("../models/FollowerModel");
// const ProfileModel = require("../models/ProfileModel");

const jwt = require("jsonwebtoken"); // JSON Web Token
const bcrypt = require("bcryptjs"); // Ecnrypt the password.
const isEmail = require("validator/lib/isEmail"); // Validate if the input Email is Valid Email address.

const userPng =
  "https://res.cloudinary.com/indersingh/image/upload/v1593464618/App/user_mklcpl.png"; // This Profile picture will be used if the User didnot uploaded any

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

// Check if the Username is taken or not
router.get("/:username", async (req, res) => {
  const { username } = req.params; // Receive the Username
  console.log(req.params);
  try {
    // Check the Username length
    if (username.length < 1) return res.status(401).send("Invalid");

    // Check if Username is in the required format
    if (!regexUserName.test(username)) return res.status(401).send("Invalid");

    // If all validation above are passed, here we check if that Username exist in our db
    const user = await UserModel.findOne({ username: username.toLowerCase() });

    // If this Username exists
    if (user) return res.status(401).send("Username already taken");

    // Otherwise
    return res.status(200).send("Available");
  } catch (error) {
    console.log(error);
    return res.status(500).send(`Server error`);
  }
});

// Here we create the new User
router.post("/", async (req, res) => {
  // Inside the Body we send the User object.
  const {
    name,
    email,
    username,
    password,
    bio,
    facebook,
    youtube,
    twitter,
    instagram,
  } = req.body.user;

  // Check if email is valid
  if (!isEmail(email)) return res.status(401).send("Invalid Email");

  // Check on password length
  if (password.length < 6) {
    return res.status(401).send("Password must be atleast 6 characters");
  }

  try {
    // Check if there is User with that Email Address
    let user;
    user = await UserModel.findOne({ email: email.toLowerCase() });

    // If User with that Email exists
    if (user) {
      return res.status(401).send("User already registered");
    }

    user = new UserModel({
      name,
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password,
      profilePicUrl: req.body.profilePicUrl || userPng, // Check if there is a User profile picture. If there is not, then use userPng.
    });

    user.password = await bcrypt.hash(password, 10); // Encrypt the userpassword
    await user.save(); // Save the User object.

    let profileFields = {};
    profileFields.user = user._id; // Here we reference this Profile model with User Id

    profileFields.bio = bio;

    profileFields.social = {};

    if (facebook) profileFields.social.facebook = facebook;
    if (youtube) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;

    await new ProfileModel(profileFields).save(); // Create the Profile Model

    // Create Follower Model
    await new FollowerModel({
      user: user._id,
      followers: [],
      following: [],
    }).save();

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
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
