const Returned = require('./Returned');

class Delivered {
  constructor() { this.name = 'Delivered'; }

  pay() { throw new Error('Cannot pay: Already paid'); }

  ship() { throw new Error('Cannot ship: Already shipped'); }

  deliver() { throw new Error('Cannot deliver: Already delivered'); }

  return(order) {
    order.state = new Returned();
    order.history.push({ state: order.state.name, action: 'return', timestamp: new Date().toISOString() });
    return order;
  }

  cancel() { throw new Error('Cannot cancel: Already delivered'); }

  refund() { throw new Error('Cannot refund: Have to be returned first'); }
}

module.exports = Delivered;
