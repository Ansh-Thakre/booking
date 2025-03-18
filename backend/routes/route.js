const express = require("express");
const router = express.Router();
const user = require("../controller/userController.js");


router.post("/booking" , user.booking)

module.exports = router;