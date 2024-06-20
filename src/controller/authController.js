const UserModel = require("../model/user.js");
const fs = require("fs");
const path = require("path");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.getByEmailPassword(email, password);
    req.session.user = user[0];
    res.json({
      message: "Login successfullsy",
      data: user[0],
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Unable to logout" });
    }
    res.json({ message: "Logged out successfully" });
  });
};

const getUserData = (req, res) => {
  if (req.session.user) {
    req.session.isLoggedIn = true;
    res.json({ message: "Get user data successfully", session: req.session });
  } else {
    res.status(401).json({ message: "User not logged in" });
  }
};

module.exports = { login, logout, getUserData };
