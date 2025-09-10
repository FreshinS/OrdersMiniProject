const { v4: uuidv4 } = require('uuid');
const User = require('./UserModel');

class UserService {
  constructor() {
    this.users = [];
  }

  createUser({ name, balance = 0 }) {
    const user = new User({ id: uuidv4(), name, balance });
    this.users.push(user);
    return user;
  }

  getById(id) {
    return this.users.find(u => u.id === id) || null;
  }

  list() {
    return this.users.slice();
  }

  decreaseBalance(userId, amount) {
    const u = this.getById(userId);
    if (!u) throw new Error('User not found');
    if (u.balance < amount) throw new Error('Not enough money');
    u.balance -= amount;
    return u;
  }

  increaseBalance(userId, amount) {
    const u = this.getById(userId);
    if (!u) throw new Error('User not found');
    u.balance += amount;
    return u;
  }
}

module.exports = UserService;
