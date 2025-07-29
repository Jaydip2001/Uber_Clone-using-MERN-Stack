const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller");


router.post("/register", [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min: 8}).withMessage("Password must be at least 8 characters long"),
], userController.register);

module.exports = router;
