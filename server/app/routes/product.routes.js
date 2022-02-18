const { Product } = require("../models/index.js");
 
module.exports = app => {
    const Orderdetail = require("../controller/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Orderdetail.create);
  
    // Retrieve all Tutorials
    router.get("/", Orderdetail.findAll);

    app.use('/api/Orderdetails', router);
  };