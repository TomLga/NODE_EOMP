// end points fo user infomation
const express = require('express')
const bodyParser = require('body-parser')
const setRoute = express.Router()
const user = require('../model/user')
const app = express()

// app.use(bodyParser.json()) 

setRoute.get('/users', (req, res)=>{
    user.fetchUsers(req, res)
})
setRoute.get('/user/:id',(req, res)=>{
    user.fetchUser(req, res)
})
setRoute.post('/userAdd',(req, res)=>{
    user.addUser(req, res)
})
setRoute.patch('/user/:id', bodyParser.json(),(req, res)=>{
    user.updateUser(req, res)
})
setRoute.put('/user/:id',bodyParser.json(),(req, res)=>{
    user.updateUser(req, res)
})
setRoute.delete('/user/:id', (req,res)=>{
    user.deleteUser(req, res)
})

module.exports= {
    setRoute,
    express
}