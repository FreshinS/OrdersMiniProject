class Cancelled {
  constructor() { this.name = 'Cancelled'; }

  pay() { throw new Error('Cannot pay: Order cancelled'); }
  ship() { throw new Error('Cannot ship: Order cancelled'); }
  deliver() { throw new Error('Cannot deliver: Order cancelled'); }
  cancel() { throw new Error('Cannot cancel: Order cancelled'); }
  return() { throw new Error('Cannot return: Order cancelled'); }
  refund() { throw new Error('Cannot refund: Order cancelled'); }
}

module.exports = Cancelled;
