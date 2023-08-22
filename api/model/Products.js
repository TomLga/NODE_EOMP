// query for user
const dbConfig = require("../config/dbConnection");
const { hash, compare, hashSync } = require('bcrypt')
const { createToken } = require('../middleware/authication');



class Product{
    fetchProducts(req, res) {
       
        const query = ` 
            SELECT prodID, prodName,quantity, amount, category,prodUrl
            FROM Products
            `;
        dbConfig.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }
      fetchProduct(req, res) {
        const query = `
        SELECT prodID, prodName,quantity, amount, category,prodUrl
        FROM Products
        WHERE prodID =?
        `;
        dbConfig.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }
    
    addProduct(req, res) {   
        const query = `
          INSERT INTO Users 
          SET ?; 
        `;
      }
    
      updateProduct(req, res) {
        const prodID = req.params.id;
        const newProd = req.body;
        const query = `
                UPDATE products
                SET ? 
                WHERE prodID = ?
            `;
        dbConfig.query(query, [newProd, prodID], (err) => {
          if (err) {
            res.json({
              status: res.statusCode,
              msg: "Error updating Product",
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "product updated",
            });
          }
        });
      }
    
      deleteProduct(req, res) {
        const query = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id}
            `;
        dbConfig.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "PRODUCT SUCCESFULLY DELETED",
          });
        });
      }
}

module.exports = Product