const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.js");

//CREATE
router.post("/register", UserController.createNewUser);
//READ
router.get("/", UserController.getAllUser);
router.get("/avatars", UserController.getAvatars);
//LOGINs
router.post("/login", UserController.login);
//UPDATE
router.patch("/:id", UserController.updateUser);
// DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;
