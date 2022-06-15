require ("../models/mongooseConnection");
const Menu = require("../models/Menu");
 const Order =require('../models/Order')


// dipslay of orders
 exports.index =async(req,res) =>{
    const menu = await Menu.find({})
    const orders = await Order.find({}).populate("menu")
    if(orders){
        // console.log(menu)
    res.render("orders/index",{title:"order",orders,menu})
    }
}

// add menu .get
exports.add = async (req,res)=>{
const menu = await Menu.findById(req.params.menu_id)
// console.log(menu)
res.render("orders/add",{title:"order",menu})
}

// mapping route to  post orders
exports.save =async(req,res)=>{
    const menu = await Menu.findById(req.params.menu_id)
    const order = new Order({
            customer:req.body.customer,
            menu:req.params.menu_id,
            order_date:Date(),
            paid :0,
            cost:req.body.cost,
            status:0
        })
        await order.save()
  res.redirect(302,"/orders")
}

// edit
// mapping route to get edit orders
exports.edit =async(req,res)=>{
const menus = await Menu.find({})
 let id= req.params.id
const order = await Order.findById(id).populate("menu")
// console.log(order.menu.name)
    res.render("orders/edit",{title:"Orders",menus,order})
}

exports.update = async(req,res)=>{
    const menu = await Menu.findById(req.body.menu)
    const editedOrder=
    {  customer:req.body.customer,
        menu:req.body.menu,
       order_date:Date(),
       paid :0,
       cost:menu.price,
       status:0
    }
    id = req.params.id
    const order =  await Order.updateOne({_id:id},editedOrder ).populate("menu")
        res.redirect(302,"/orders")
}

    //    delelete orders
    exports.getdelete = async(req,res)=>{
        res.render("orders/delete",{title:"Order"})
    }

    // post delete
    exports.delete =async(req,res)=>{
        let id = req.params.id
        const order =await Order.deleteOne({_id:id})
        res.redirect(302,"/orders")
    }