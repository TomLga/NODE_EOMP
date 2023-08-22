// query for user
const dbConfig = require("../config/dbConnection");
const { hash, compare, hashSync } = require('bcrypt')
const { createToken } = require('../middleware/authication');



class User {
  fetchUsers(req, res) {
    //to fetch all users
    const query = ` 
        SELECT userID, firstName,lastName,userAge, gender, userRole,emailAdd,userPass, userProfile
        FROM Users
        `;
    dbConfig.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
    SELECT userID, firstName,lastName,userAge, gender, userRole,emailAdd,userPass, userProfile
    FROM Users
    WHERE userID =?
    `;
    dbConfig.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: results,
      });
    });
  }

async addUser(req, res) {
    const data = req.body;

    data.userPass = await hash(data.userPass, 15); // 15 is the value for salt
  
    // Payload =
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass
    };
 
    const query = `
      INSERT INTO Users 
      SET ?; 
    `;         
    
    dbConfig.query(query, [data], (err) => {
      if (err) throw err;      
        let token = createToken(user)
      res.json({
        status: res.statusCode,
        token,
        msg: "You are now registered"
      })
    })
  }

  updateUser(req, res) {
    const userId = req.params.id;
    const newData = req.body;
    const query = `
            UPDATE Users 
            SET ? 
            WHERE userID = ?
        `;
    dbConfig.query(query, [newData, userId], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "Error updating user",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "User updated",
        });
      }
    });
  }

  deleteUser(req, res) {
    const query = `
        DELETE FROM users
        WHERE UserID = ${req.params.id}
        `;
    dbConfig.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "USER SUCCESFULLY DELETED",
      });
    });
  }
}

module.exports = User;
