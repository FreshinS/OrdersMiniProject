const Created = require('./states/Created');

class Order {
  constructor({ id, userId, amount = 0 }) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.state = new Created();
    this.history = [
      { state: this.state.name, action: 'create', timestamp: new Date().toISOString() }
    ];
  }

  pay(context) { return this.state.pay(this, context); }
  ship(context) { return this.state.ship(this, context); }
  deliver(context) { return this.state.deliver(this, context); }
  cancel(context) { return this.state.cancel(this, context); }
  return(context) { return this.state.return(this, context); }
  refund(context) { return this.state.refund(this, context); }
}

module.exports = Order;
