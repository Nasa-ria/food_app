require ("../models/mongooseConnection")
 const Menu =require('../models/Menu')

// menu rout
exports.index =async(req,res) =>{
    const menus = await Menu.find({})
    if(menus){
    res.render("menus/index",{title:"Menu",menus})
    }
}

// add
// **add.get
exports.add =async(req,res)=>{
   res.render("menus/add",{title:"Menu"}) 
}

// post
exports.save = async(req,res)=>{
    const menu =  await new Menu({
        name:req.body.name,
        price:req.body.price,
        status:1,
        supplementary:req.body.supplementary
    })
    menu.save()
    res.redirect(301,"/menus")
  
}


// get edit
exports.edit = async(req,res)=>{
    let id = req.params.menu_id
    const menu =  await Menu.findById(id)
    res.render("menus/edit",{title:"edit",menu})
}

// post edit
exports.update =async(req,res)=>{
    id = req.params.menu_id
    const menu = await Menu.updateOne(
        {_id:id},
       {name:req.body.name,
        price:req.body.price,
        status:1,
        supplementary:req.body.supplementary}
        )
        res.redirect(301,"/menus")
  
}


// 
exports.getdelete =async(req,res)=>{
    res.render("menus/delete",{title:"delete"})
}

exports.delete = async(req,res)=>{
  let id = req.params.menu_id 
    const menu =await Menu.deleteOne({_id:id})
    res.redirect(302,"/menus")
}