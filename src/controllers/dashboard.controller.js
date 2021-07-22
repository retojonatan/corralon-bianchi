const dashboardCtrl = {};
const User = require("../models/User");

dashboardCtrl.dashboard = async (req, res) => {
  try {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
      return res.status(404).json({ message: "No user found", auth: false });
    }
    res.status(200).json(user);
  } catch (error) {
    return res
      .status(401)
      .json({ auth: false, message: "Not valid token", error });
  }
};

dashboardCtrl.login = async (req, res) => {
  res.render("login");
};

module.exports = dashboardCtrl;
