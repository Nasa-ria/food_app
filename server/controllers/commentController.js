require("../models/mongooseConnection");
const Comment = require("../models/Comment");

exports.comment = async (req, res) => {
	const comment = await Comment.find({});
	res.render("comments/index", { title: "Comment", comment });
};



// posting comment
exports.postComment = async (req, res) => {
	const comment = new Comment({
		name: req.body.name,
		email: req.body.email,
		comment: req.body.comment,
	});
	console.log(comment);
	await comment.save();
	res.redirect(302, "/feedback");
};

// editting comment
exports.edit = async (req, res) => {
	let id = req.params.id;
	const comment = await Comment.findById(id);
	res.render("comments/edit", { title: "Comment", comment });
};
// post
exports.update = async (req,res) =>{
	let id = req.params.id
	const comment = await Comment.updateOne({_id:id},{
		name: req.body.name,
		email: req.body.email,
		comment: req.body.comment,
	})
	res.redirect(302,"/about")
}
