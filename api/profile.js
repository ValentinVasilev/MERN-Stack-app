const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const FollowerModel = require("../models/FollowerModel");
const PostModel = require("../models/PostModel");

// Get Profile Info
// The base route is "/api/profile"
router.get(`/:username`, authMiddleware, async (req, res) => {
  // Here we get Username from params
  const { username } = req.params;

  try {
    // Here we look for the User in UserModel
    const user = await UserModel.findOne({ username: username.toLowerCase() });
    // If there is no User

    if (!user) {
      return res.status(404).send("User not found!");
    }

    // If User is found we look for his Profile and Populate the "User" object.
    const profile = await ProfileModel.findOne({ user: user._id }).populate(
      "user"
    );

    // Follower information of the profile
    const profileFollowStats = await FollowerModel.findOne({ user: user._id });

    return res.json({
      user,
      profile,

      // followersLength:
      //   profileFollowStats.followers.length > 0
      //     ? profileFollowStats.followers.length
      //     : 0,

      // followingLength:
      //   profileFollowStats.following.length > 0
      //     ? profileFollowStats.following.length
      //     : 0,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error!");
  }
});

// Get Posts of the User
router.get(`/posts/:username`, authMiddleware, async (req, res) => {
  try {
    const { username } = req.params;

    const user = await UserModel.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res.status(404).send("No User Found");
    }

    const posts = await PostModel.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("comments.user");

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
