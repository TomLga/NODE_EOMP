// connectong to mysql // cc= cleverCloud

require('dotenv').config()
const {createPool} = require("mysql")
const dbConnection  = createPool({
    host: process.env.ccHost,
    database: process.env.ccName,
    user: process.env.ccUser,
    password: process.env.ccPassword,
    multipleStatements:true,
    connectionLimit: 10
    

})

module.exports = dbConnection