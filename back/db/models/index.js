const Carrito = require('./carrito');
const Product = require('./products');
const Category = require('./category');
const User = require('./user');
const Order = require('./order');

Category.belongsToMany(Product, { through: 'ProductCategory' });
Product.belongsToMany(Category, { through: 'ProductCategory' });
Carrito.belongsTo(User);
Carrito.belongsToMany(Product, { through: 'ProductCarrito' });
Product.belongsToMany(Carrito, { through: 'ProductCarrito' });
Order.belongsToMany(Product, { through: 'ProductOrder' });
Product.belongsToMany(Order, { through: 'ProductOrder' });
User.hasMany(Order)
User.belongsToMany(Product, { through: 'UserProduct' })
Product.belongsToMany(User, { through: 'UserProduct' })

module.exports = {
   Category, Product, Carrito, User, Order
}