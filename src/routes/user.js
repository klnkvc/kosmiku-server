const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.js");

//CREATE
router.post("/", UserController.createNewUser);
//READ
router.get("/", UserController.getAllUser);
//UPDATE
router.patch("/:id", UserController.updateUser);
// DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;
