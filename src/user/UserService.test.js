const UserService = require('./UserService');

describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  test('Create user', () => {
    const user = userService.createUser({ name: 'Ilya', balance: 100 });
    expect(user).toHaveProperty('id');
    expect(user.balance).toBe(100);
  });

  test('Decrease and increase balance', () => {
    const user = userService.createUser({ name: 'Ilya', balance: 200 });
    userService.decreaseBalance(user.id, 50);
    expect(user.balance).toBe(150);

    userService.increaseBalance(user.id, 100);
    expect(user.balance).toBe(250);
  });

  test('Error when not enough money', () => {
    const user = userService.createUser({ name: 'Ilya', balance: 10 });
    expect(() => userService.decreaseBalance(user.id, 50)).toThrow('Not enough money');
  });
});
