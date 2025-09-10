const express = require('express');

module.exports = (userService) => {
  const router = express.Router();

  router.post('/', (req, res, next) => {
    try {
      const { name, balance } = req.body;
      if (!name) throw new Error('User name required');
      const user = userService.createUser({ name, balance });
      res.status(201).json(user);
    } catch (e) { next(e); }
  });

  router.get('/', (req, res) => {
    res.json(userService.list());
  });

  router.get('/:id', (req, res, next) => {
    try {
      const user = userService.getById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (e) { next(e); }
  });

  return router;
};
