const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const FollowerModel = require("../models/FollowerModel");
const PostModel = require("../models/PostModel");

//GET PROFILE INFO
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

// GET POSTS OF THE USER

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

// GET FOLLOWERS

router.get("/followers/:userId", authMiddleware, async (req, res) => {
  const { userId } = req.params;

  try {
    // Here we search for the User by userId
    const user = await FollowerModel.findOne({ user: userId }).populate(
      "followers.user"
    );

    return res.json(user.followers);
  } catch (error) {}
});

// GET FOLLOWING

router.get("/following/:userId", authMiddleware, async (req, res) => {
  const { userId } = req.params;

  try {
    // Here we search for the User with this userId
    const user = await FollowerModel.findOne({ user: userId }).populate(
      "following.user"
    );

    return res.json(user.following);
  } catch (error) {}
});

// FOLLOW A USER

router.post("/follow/:userToFollowId", authMiddleware, async (req, res) => {
  const { userId } = req;
  const { userToFollowId } = req.params;

  try {
    // This user is the logged in User
    const user = await FollowerModel.findOne({ user: userId });

    const userToFollow = await FollowerModel.findOne({ user: userToFollowId });

    if (!user || !userToFollow) {
      return res.status(404).send("User not found!");
    }

    // Here we check if the User has not followed the User before

    const isFollowing =
      user.following.length > 0 &&
      user.following.filter(
        (followin) => following.user.toString() === userToFollowId
      ).length > 0; // Here we convert User to string, because User its an Object

    // If its True it means the User is already followed.
    if (isFollowing) {
      return res.status(401).send("User already followed!");
    }

    await user.following.unshift({ user: userToFollowId }); // Here we add Id of the User we have been following
    await user.save();

    // Here we add the data inside followers of the User been followed.
    await userToFollow.followers.unshift({ user: userId });
    await userToFollow.save();

    return res.status(200).send("Success!");
  } catch (error) {}
});

//UNFOLLOW A USER

router.put("/unfollow/:userToUnfollowId", authMiddleware, async (req, res) => {
  const { userId } = req;
  const { userToUnfollow } = req.params;

  try {
    const user = await FollowerModel.fineOne({ user: userId });
    const userToUnfollow = await FollowerModel.findOne({
      user: userToUnfollow,
    });

    if (!user || !userToUnfollow) {
      return res.status(404).send("User not found!");
    }

    const isFollwing =
      user.following.length > 0 &&
      user.following.filter(
        (following) => following.user.toString() === userToUnfollowId
      ).length === 0;

    if (isFollowing) {
      return res.status(401).send("User not followed previously");
    }

    // Remove user from the array of following users and from the Followers of the User that has been following

    const removeFollowing = user.following
      .map((following) => following.user.toString())
      .indexOf(userToUnfollowId);

    await user.following.splice(removeFollowing, 1);
    await user.save();

    const removeFollower = userToUnfollow.followers
      .map((follower) => follower.user.toString())
      .indexOf(userId);

    await userToUnfollow.followers.splice(removeFollower, 1);
    await userToUnfollow.save();

    return res.status(200).send("Success");
  } catch (error) {}
});

module.exports = router;
