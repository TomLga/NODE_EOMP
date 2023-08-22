const Products = require('./Products')
const User = require('./Users')

module.exports = {
    products: new Products(),
    user: new User()
}