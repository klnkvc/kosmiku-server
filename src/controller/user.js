const UserModel = require("../model/user.js");
const fs = require("fs");
const path = require("path");

const getAllUser = async (req, res) => {
  try {
    const [data] = await UserModel.getAll();
    res.json({
      message: "get all user succesfull",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const getAvatars = (req, res) => {
  const avatarsDir = path.join(__dirname, "../public/avatars");
  fs.readdir(avatarsDir, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to scan directory");
    }
    const avatars = files.map(
      (file) => `http://localhost:8081/public/avatars/${file}`
    );
    res.json(avatars);
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.getByEmailPassword(email, password);
    req.sess;
    res.json({
      message: "Data Founded",
      data: user[0],
    });
  } catch (error) {
    res.status(404).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  console.log("ini req.body :", req.body);
  const { body } = req;
  try {
    await UserModel.createNewUser(body);
    res.json({
      message: "create new user succesfull",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UserModel.updateUser(body, id);
    res.json({
      message: "update succesfull",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.deleteUser(id);
    res.json({
      message: "Delete succesfull",
    });
  } catch (error) {}
};
module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
  login,
  getAvatars,
};
