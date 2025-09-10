class Refunded {
  constructor() { this.name = 'Refunded'; }

  pay() { throw new Error('Cannot pay: Order refunded'); }
  ship() { throw new Error('Cannot ship: Order refunded'); }
  deliver() { throw new Error('Cannot deliver: Order refunded'); }
  cancel() { throw new Error('Cannot cancel: Order refunded'); }
  return() { throw new Error('Cannot return: Order refunded'); }
  refund() { throw new Error('Cannot refund: Order refunded'); }
}

module.exports = Refunded;
