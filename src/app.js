const express = require('express');
const bodyParser = require('express').json;

const UserService = require('./user/UserService');
const OrderService = require('./order/OrderService');

const createUserController = require('./user/UserController');
const createOrderController = require('./order/OrderController');

const app = express();
app.use(bodyParser());

const userService = new UserService();
const orderService = new OrderService(userService);

app.use('/users', createUserController(userService));
app.use('/orders', createOrderController(orderService));

app.use((err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  res.status(err.statusCode || 400).json({ error: err.message || String(err) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`);
});
