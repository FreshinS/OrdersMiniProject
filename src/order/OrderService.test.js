const UserService = require('../user/UserService');
const OrderService = require('./OrderService');

describe('OrderService', () => {
  let userService, orderService, user;

  beforeEach(() => {
    userService = new UserService();
    orderService = new OrderService(userService);
    user = userService.createUser({ name: 'Ilya', balance: 500 });
  });

  test('Create Order', () => {
    const order = orderService.createOrder(user.id, 100);
    expect(order.state.name).toBe('Created');
  });

  test('Deliver Order', () => {
    const order = orderService.createOrder(user.id, 100);
    const paid = orderService.pay(order.id);
    expect(paid.state.name).toBe('Paid');

    const shipped = orderService.ship(order.id);
    expect(shipped.state.name).toBe('Shipped');

    const delivered = orderService.deliver(order.id);
    expect(delivered.state.name).toBe('Delivered');
  });

  test('Refund Order after deliver', () => {
    const order = orderService.createOrder(user.id, 200);
    orderService.pay(order.id);
    orderService.ship(order.id);
    orderService.deliver(order.id);
    const returned = orderService.return(order.id);
    expect(returned.state.name).toBe('Returned');

    const refunded = orderService.refund(order.id);
    expect(refunded.state.name).toBe('Refunded');
  });
});
