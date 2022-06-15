// requiring exress
const express = require("express");
// requiring the menucontroller
const controller = require("../controllers/orderController")

// creating a variable tha holds object for declaring route within our application
const router = require("express").Router();



// displaying the orders
router.get("/",controller.index)

// add order
// get req
router.get("/add/:menu_id",controller.add)

// .post req
router.post("/add/:menu_id",controller.save)

//edit order
// get req
router.get("/edit/:id", controller.edit)
// post req
router.post("/edit/:id",controller.update)

// deleting order
// get
router.get("/delete/:id",controller.getdelete)

// .post
router.post("/delete/:id",controller.delete)

module.exports = router;