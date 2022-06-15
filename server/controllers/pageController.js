
 require ("../models/mongooseConnection")
// const { CommandFailedEvent } = require("mongoose/node_modules/mongodb")
 const Comment = require('../models/Comment')

exports.home = async(req, res) => {
res.render('pages/home',{title :"Home"})
}

exports.contact_us =async(req,res) =>{
    res.render('pages/contact_us', {title:"Contact_us"})
}

// comment
// exports.comment = async(req,res)=>{
//     // const comments =  await Comment.find({})
//     res.render('pages/comment', {title:"Comment"})
// }
// posting comment
// exports.postComment = async(req,res)=>{
//     const comment =  new Comment({
//         name:req.body.name,
//         email:req.body.email,
//         comment:req.body.comment
//     })
//     console.log(comment)
//    await comment.save()
//    res.redirect(302,"/feedback")
//         }
// editing the comment
// .get
exports.Editcomment =async(req,res)=>{
    res.render("pages/comment_edit",{title:"Comment"})
}









// about
exports.about =async(req,res)=>{
    const comments = await Comment.find({})
    res.render('pages/about',{title:"About",comments})
}
// feedback
exports.feedback =async (req,res)=>{
    res.render("pages/feedback",{title:"Feedback"})
}

