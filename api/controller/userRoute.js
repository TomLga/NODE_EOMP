// end points fo user infomation
const express = require('express')
const bodyParser = require('body-parser')
const setRoute = express.Router()
const {user, products} = require('../model')
const verifyAToken = require('../middleware/authication')
const app = express()

setRoute.get('/users',(req, res) =>{
    user.fetchUsers(req, res) //to fetch user from the db  //user is the file name thaat its coming from 
})
setRoute.get('/user/:id',(req, res) =>{
    user.fetchUser(req, res)
})
setRoute.post('/addNewUser', bodyParser.json(), 
    (req, res)=>{
        user.addUser(req, res)
})
setRoute.put('/user/:id', bodyParser.json(), 
    (req, res)=>{
        user.updateUser(req, res)
})
setRoute.patch('/user/:id', bodyParser.json(), 
    (req, res)=>{
        user.updateUser(req, res)
})
setRoute.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res)
})

// =========PRODUCT ROUTES=============


setRoute.get('/products', (req, res)=>{
    products.fetchProducts(req, res)
})
setRoute.get('/product',(req, res)=>{
    products.fetchProduct(req, res)
})
setRoute.post('/AddNewProduct',(req, res)=>{
    products.addProduct(req, res)
})

setRoute.patch('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
setRoute.put('/product/:id',bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
setRoute.delete('/product/:id', (req,res)=>{
    products.deleteProduct(req, res)
})



module.exports= {
    setRoute,
    express
}