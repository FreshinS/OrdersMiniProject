const Paid = require('./Paid');
const Cancelled = require('./Cancelled');

class Created {
  constructor() { this.name = 'Created'; }

  pay(order, { userService }) {
    const user = userService.getById(order.userId);
    if (!user) throw new Error('Cannot pay: User not found');

    if (user.balance < order.amount) throw new Error('Cannot pay: Not enough money');

    userService.decreaseBalance(user.id, order.amount);
    order.state = new Paid();
    order.history.push({ state: order.state.name, action: 'pay', timestamp: new Date().toISOString() });
    return order;
  }

  ship() { throw new Error('Cannot ship: Not paid'); }

  deliver() { throw new Error('Cannot deliver: Not shipped'); }

  cancel(order) {
    order.state = new Cancelled();
    order.history.push({ state: order.state.name, action: 'cancel', timestamp: new Date().toISOString() });
    return order;
  }

  return() { throw new Error('Cannot return: Not delivered'); }

  refund() { throw new Error('Cannot refund: Not paid'); }
}

module.exports = Created;
