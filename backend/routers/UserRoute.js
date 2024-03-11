const {createUser} = require("../controller/UserController");

const express = require("express");


const router = express.Router();
router.post("/", createUser); 

module.exports = router;