const User = require("../models/User");

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

usersCtrl.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(204).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
  }
};

usersCtrl.createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();
    res.json({ message: "User created" });
  } catch (error) {
    console.error(error);
  }
};

usersCtrl.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { username } = req.body;
    const userUpdated = await User.findByIdAndUpdate(id, { username });
    if (userUpdated) {
      res.json({ message: "User updated" });
    } else {
      res.status(204).json({ message: "No user with parameters" });
    }
  } catch (error) {
    console.error(error);
  }
};

usersCtrl.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userDeleted = await User.findByIdAndDelete(id);
    if (userDeleted) {
      res.json({ message: "User deleted" });
    } else {
      res.status(204).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = usersCtrl;
