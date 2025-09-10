const Shipped = require('./Shipped');
const Refunded = require('./Refunded');

class Paid {
  constructor() { this.name = 'Paid'; }

  pay() { throw new Error('Cannot pay: Already paid'); }

  ship(order) {
    order.state = new Shipped();
    order.history.push({ state: order.state.name, action: 'ship', timestamp: new Date().toISOString() });
    return order;
  }

  deliver() { throw new Error('Cannot deliver: Not shipped'); }

  cancel(order, { userService }) {
    userService.increaseBalance(order.userId, order.amount);

    order.state = new Cancelled();
    order.history.push({ state: order.state.name, action: 'cancel', timestamp: new Date().toISOString() });
    return order;
  }

    // Вообще должен быть возврат а не отмена наверное
  return() { throw new Error('Cannot return: Not delivered'); }

  refund() { throw new Error('Cannot refund: Not delivered'); }
}

module.exports = Paid;
