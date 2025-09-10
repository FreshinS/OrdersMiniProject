const Delivered = require('./Delivered');

class Shipped {
  constructor() { this.name = 'Shipped'; }

  pay() { throw new Error('Cannot pay: Already paid'); }

  ship() { throw new Error('Cannot ship: Already shipped'); }

  deliver(order) {
    order.state = new Delivered();
    order.history.push({ state: order.state.name, action: 'deliver', timestamp: new Date().toISOString() });
    return order;
  }

  cancel() { throw new Error('Cannot cancel: Already shipped'); }

  // По тз ни отмена ни возврат не доступен
  return() { throw new Error('Cannot return: Not delivered'); }

  refund() { throw new Error('Cannot refund: Not delivered'); }
}

module.exports = Shipped;
