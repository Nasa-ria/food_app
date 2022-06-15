// const { Double } = require('mongodb')
const mongoose= require('mongoose')
const  MenusSchema =new mongoose.Schema({
    name:{
        type:String,      
},
price: {
    type:Number
},
status:{
    type:String
},
supplementary:{
    type:String
},


})
module.exports=mongoose.model('Menu',MenusSchema)