// requiring exress
const express = require("express");
// requiring the menucontroller
const controller = require("../controllers/menuController")

// creating a variable tha holds object for declaring route within our application
const router = require("express").Router();



// menu
router.get("/",controller.index)

// add.get
router.get("/add",controller.add)

// add.post
router.post("/add",controller.save)


// edit
router.get("/edit/:menu_id",controller.edit)


// post edit
router.post("/edit/:menu_id",controller.update)


// deleting menu
// delete.get
router.get("/delete/:menu_id",controller.getdelete)

// post delete
router.post("/delete/:menu_id",controller.delete)


module.exports = router;