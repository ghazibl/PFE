const {createProduct} = require("../controller/ProductController")
const express = require("express");
const requireAuth = require("../middleware/requireUserAuth");

const productRouter = express.Router();
productRouter.post("/",requireAuth, createProduct); 


module.exports = productRouter;