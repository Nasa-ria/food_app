// requiring exress
const express = require("express");
// requiring the appcontroller to to anble users
const controller = require("../controllers/pageController")

// creating a variable tha holds object for declaring route within our application
const router = require("express").Router();

router.get("/", controller.home);

// contact us
router.get("/contact_us",controller.contact_us);

// comment
// **geting the comment
// router.get("/comment",controller.comment);

// **dumping the comment data into the database
// router.post("/comment",controller.postComment);

// editoing a comment
// .get
// router.get("/about/:comment._id",controller.Editcomment)

// about
router.get("/about",controller.about);


// feedback
router.get("/feedback",controller.feedback);






module.exports = router;

