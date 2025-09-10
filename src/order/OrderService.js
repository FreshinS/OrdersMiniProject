const { v4: uuidv4 } = require('uuid');
const Order = require('./OrderModel');

class OrderService {
  constructor(userService) {
    this.orders = [];
    this.userService = userService;
  }

  createOrder(userId, amount = 0) {
    const user = this.userService.getById(userId);
    if (!user) throw new Error('User not found');
    const order = new Order({ id: uuidv4(), userId, amount });
    this.orders.push(order);
    return order;
  }

  getOrder(id) {
    const order = this.orders.find(o => o.id === id) || null;
    if (!order) throw new Error('Order not found');
    return order;
  }

  listOrders() {
    return this.orders;
  }

  pay(id) {
    const order = this.getOrder(id);
    order.pay({ userService: this.userService, orderService: this });
    return order;
  }

  ship(id) {
    const order = this.getOrder(id);
    order.ship({ userService: this.userService, orderService: this });
    return order;
  }

  deliver(id) {
    const order = this.getOrder(id);
    order.deliver({ userService: this.userService, orderService: this });
    return order;
  }

  cancel(id) {
    const order = this.getOrder(id);
    order.cancel({ userService: this.userService, orderService: this });
    return order;
  }

  return(id) {
    const order = this.getOrder(id);
    order.return({ userService: this.userService, orderService: this });
    return order;
  }

  refund(id) {
    const order = this.getOrder(id);
    order.refund({ userService: this.userService, orderService: this });
    return order;
  }

  getHistory(id) {
    const order = this.getOrder(id);
    return order.history.slice();
  }
}

module.exports = OrderService;
