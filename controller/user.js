
const User = require("../model/User");


require("dotenv").config();


// to create user

exports.postUserInfo = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name) {
      return res.status(422).json({ error: "Please add your name" });
    }

    if (!email) {
      return res.status(422).json({ error: "Please add your email" });
    }

    if (!age) {
      return res.status(422).json({ error: "Please add your age" });
    }


    const userinfo = new User({
      name,
      email,
      age,
    });

    const userPostResult = await User.create(userinfo);
    res.status(201).json(userPostResult);
  } catch (error) {
    res.status(400).json({ error: "Something Went Wront" });
  }
};

// to get all the user list

exports.getUserinfo = async (req, res) => {
  try {

    const userList = await User.find({}).sort({ date: "DESC" });

    res.status(200).json(userList);

  } catch (error) {

    res.status(400).json({ error: "User could not found.." });

  }
};

// to get single user

exports.getSingleUserInfo = async (req, res) => {
  try {
    var userQuery = { _id: req.params.userid };

    const singleUser = await User.findOne(userQuery);

    res.status(200).json(singleUser);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

// to update user info

exports.updateUserInfo = async (req, res) => {
  try {

    const { name, email, age } = req.body;

    var updateQuery = { _id: req.params.id };

    const payload = { name, email, age };

    const userUpdateinfo = await User.findByIdAndUpdate(updateQuery, {
      $set: payload,
    });

    res.status(200).json(userUpdateinfo);


  } catch (error) {
    res.status(404).json({ error: "User not found to Update" });
  }
};

// to delete user

exports.deleteUser = async (req, res) => {
  try {
    var deleteQuery = { _id: req.params.id };

    const deleteUser = await User.findByIdAndDelete(deleteQuery);

    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(404).json({ error: "User not found to delete" });
  }
};