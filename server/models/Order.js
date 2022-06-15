const mongoose =require('mongoose')
const OrdersSchema =new mongoose.Schema({
    customer:{ 
        type:String
    },
    menu:{ type:mongoose.Types.ObjectId,ref:"Menu"},

    order_date:{
        type:Date
    },
    cost:{
        type:Number
    },
    paid:{
        type:Boolean
    },
    status:{
        type:Boolean
    }
})
module.exports=mongoose.model('Order',OrdersSchema)