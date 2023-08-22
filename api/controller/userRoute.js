// end points fo user infomation
const express = require('express')
const bodyParser = require('body-parser')
const setRoute = express.Router()
const User = require('../model/user')
const app = express()

// app.use(bodyParser.json()) 

setRoute.get('/users', (req, res)=>{
    User.fetchUsers(req, res)
})
setRoute.get('/user/:id',(req, res)=>{
    User.fetchUser(req, res)
})
// setRoute.post('/userAdd',(req, res)=>{
//     User.addUser(req, res)
// })
setRoute.post('/userAdd', (req, res) => {
    const userInstance = new User(); // Instantiate the User class
    userInstance.addUser(req, res);   // Call the addUser method
  });
  


setRoute.patch('/user/:id', bodyParser.json(),(req, res)=>{
    User.updateUser(req, res)
})
setRoute.put('/user/:id',bodyParser.json(),(req, res)=>{
    User.updateUser(req, res)
})
setRoute.delete('/user/:id', (req,res)=>{
    User.deleteUser(req, res)
})

module.exports= {
    setRoute,
    express
}