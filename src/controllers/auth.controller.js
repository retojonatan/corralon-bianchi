const authCtrl = {};
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config");

authCtrl.signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
      password,
    });
    user.password = await user.encryptPassword(user.password);
    await user.save();
    const token = jwt.sign({ id: user._id }, config.SK, {
      expiresIn: 60 * 60 * 12,
    });
    res.status(201).json({ auth: true, token });
  } catch (error) {
    res.status(500).send("There was a problem registering the user");
  }
};

authCtrl.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordIsValid = await user.validatePassword(password);
    if (!passwordIsValid) {
      return res.status(401).json({
        auth: false,
        token: null,
      });
    }
    const token = jwt.sign({ id: user._id }, config.SK, {
      expiresIn: 60 * 60 * 12,
    });
    res.json({ auth: true, token });
  } catch (error) {
    res.status(500).send("There was a problem at the login");
  }
};

authCtrl.logIn = (req, res) => {
  res.status(200).send({ auth: false });
};

authCtrl.logOut = async (req, res) => {
  res.status(200).send({ auth: false, token: null });
};

module.exports = authCtrl;
