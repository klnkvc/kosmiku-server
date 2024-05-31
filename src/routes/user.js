const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.js");

//CREATE
router.post("/register", UserController.createNewUser);
//READ
router.get("/", UserController.getAllUser);
//LOGIN
router.post("/login", UserController.getUserData);
//UPDATE
router.patch("/:id", UserController.updateUser);
// DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;
