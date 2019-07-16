const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const productsRoutes = require('./routes/products');
const carritoRoutes = require('./routes/carrito');
const userRoutes = require('./routes/user');
const usersRoutes = require('./routes/users');
const orderRoutes = require('./routes/order');
const reviewRoutes = require('./routes/reviews')
const addProduct = require('./routes/addProduct')
const categories = require('./routes/categories')
const cookieParser = require('cookie-parser');
const morgan = require("morgan")
const session = require("express-session");
const passport = require('./validations/passport');
const db = require('./db/db')
const { Product, Category, User } = require("./db/models")

//object fit
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cookieParser())
/****Passport configuration****/
app.use(session({
    secret: "cats",
    saveUninitialized: true,
    resave: false
}));
app.use(morgan());
/*****************************/

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*Configuración de rutas*/
app.use('/api/products', productsRoutes);
app.use('/api/categories', categories);
app.use('/api/carrito', carritoRoutes);
app.use('/api/product', addProduct);
app.use('/api/user', userRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/reviews', reviewRoutes)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

db.sync({ force: false }).then((c) => console.log(`connected to ${c.config.database} DB`))

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started on port ${PORT}`))
