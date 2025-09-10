const Refunded = require('./Refunded');

class Returned {
  constructor() { this.name = 'Returned'; }

  pay() { throw new Error('Cannot pay: Order returned'); }
  ship() { throw new Error('Cannot ship: Order returned'); }
  deliver() { throw new Error('Cannot deliver: Order returned'); }
  cancel() { throw new Error('Cannot cancel: Order returned'); }

  refund(order, { userService }) {
    userService.increaseBalance(order.userId, order.amount);

    order.state = new Refunded();
    order.history.push({ state: order.state.name, action: 'refund', timestamp: new Date().toISOString() });
    return order;
  }

  return() { throw new Error('Cannot return: Already returned'); }
}

module.exports = Returned;
