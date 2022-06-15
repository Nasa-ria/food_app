// requiring express,cors,express-ejs-layouts
const express =require('express')
const expressLayouts = require( "express-ejs-layouts")
const cors = require("cors");
app = express()



//  *********middleware***
//   mounting static files note .use indicate its a middleware
app.use(express.static("public"))
// bodyparse
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(expressLayouts);
// allows restricted acces
app.use(cors())



// **** view setting
// seting variables for views.*set layout  is for rendering views
app.set("layout","./layouts/main")
// engine
app.set("view engine","ejs")

// requiring app route
const route = require("./server/routes/pageRoutes")
app.use('/',route)



// requring menu route
const menuroute = require("./server/routes/menuRoutes")
app.use('/menus',menuroute)


// requiring order route
const  orderroute =require("./server/routes/orderRoutes")
app.use('/orders',orderroute)


// comment route
const commentroute = require("./server/routes/commentRoutes")
app.use('/comments',commentroute)

// port
const PORT= process.env.PORT||8000
app.listen(PORT ,()=>{
    console.log(`Port is listening on  port ${PORT}`)
})