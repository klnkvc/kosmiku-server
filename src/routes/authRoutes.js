const express = require("express");
const router = express.Router();
const AuthController = require("../controller/authController.js");

router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/get-data", AuthController.getUserData);

module.exports = router;
