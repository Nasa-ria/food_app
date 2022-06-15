const mongoose = require('mongoose')
const CommentsSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    comment:{
        type:String
    },
})
 module.exports=mongoose.model('Comment',CommentsSchema)


