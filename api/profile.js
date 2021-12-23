const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const FollowerModel = require("../models/FollowerModel");
const PostModel = require("../models/PostModel");
const bcrypt = require("bcryptjs");

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
      profile,
      followersLength:
        profileFollowStats.followers.length > 0
          ? profileFollowStats.followers.length
          : 0,

      followingLength:
        profileFollowStats.following.length > 0
          ? profileFollowStats.following.length
          : 0,
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
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
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
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
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
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
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
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

// UPDATE PROFILE

router.post("/update", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;
    const { bio, facebook, youtube, twitter, instagram, profilePicUrl } =
      req.body;

    let profileFields = {};
    profileFields.user = userId;

    profileFields.bio = bio;

    profileFields.social = {};
    if (facebook) profileFields.social.facebook = facebook;
    if (youtube) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;

    await ProfileModel.findByIdAndUpdate(
      { user: userId },
      { $set: profileFields }, // Here we set the data
      { new: true } // This means Only the New Data will be shown to us.
    );

    if (profilePicUrl) {
      const user = await UserModel.findById(userId);
      user.profilePicUrl = profilePicUrl;
      await user.save();
    }

    return res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// UPDATE PASSWORD

router.post("/settings/password", authMiddleware, async (req, res) => {
  try {
    const { curnetPassword, newPassword } = req.body;

    if (newPassword.length < 6) {
      return res.status(401).send("Password must be atleast 6 characters");
    }

    const user = await UserModel.findById(req.userId).select("+password");

    const isPassword = await bcrypt.compare(currentPassword, user.password);

    //This means password is not correct
    if (!isPassword) {
      return res.status(401).send("Invalid password");
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// UPDATE MESSAGE POPUP SETTINGS

router.post("/settings/messagePopup", authMiddleware, async (req, res) => {
  const user = await UserModel.findById(req.userId);

  try {
    if (user.newMessagePopup) {
      user.newMessagePopup = false;
      await user.save();
    } else {
      user.newMessagePopup = true;
      await user.save();
    }

    return res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});
module.exports = router;
