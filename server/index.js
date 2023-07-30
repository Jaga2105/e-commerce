const express = require('express');
const server = express();
const mongoose =require ('mongoose');
const productsRouter = require('./routes/Products')
const categoriesRouter = require('./routes/Categories')
const brandsRouter = require('./routes/Brands')

main().catch(err=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');
    console.log("connected to database")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

 
  // Middlewares
  server.use(express.json()); // to parse req.body
  server.use('/products',productsRouter.router)  
  server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)
server.get('/',(req,res)=>{
    res.json({status:'success'});
})

server.listen(8080,()=>{
    console.log("Server started");
})