
// requiring exress
const express = require("express");
// requiring the appcontroller to to anble users
const controller = require("../controllers/commentController")

// creating a variable tha holds object for declaring route within our application
const router = require("express").Router();



// comment
// **geting the comment
router.get("/",controller.comment);

// **dumping the comment data into the database
router.post("/",controller.postComment);

// editing comment
router.get("/edit/:id",controller.edit)

// post
router.post("/edit/:id",controller.update)




module.exports = router;