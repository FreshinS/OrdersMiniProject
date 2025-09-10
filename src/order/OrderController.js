const express = require('express');

module.exports = (orderService) => {
  const router = express.Router();

  router.post('/', (req, res, next) => {
    try {
      const { userId, amount } = req.body;
      if (!userId) throw new Error('userId required');
      const order = orderService.createOrder(userId, Number(amount || 0));
      res.status(201).json(order);
    } catch (e) { next(e); }
  });

  router.get('/:id', (req, res, next) => {
    try {
      const order = orderService.getOrder(req.params.id);
      res.json(order);
    } catch (e) { next(e); }
  });

  router.get('/', (req, res) => {
    res.json(orderService.listOrders());
  });

  router.post('/:id/pay', (req, res, next) => {
    try { res.json(orderService.pay(req.params.id)); } catch (e) { next(e); }
  });

  router.post('/:id/ship', (req, res, next) => {
    try { res.json(orderService.ship(req.params.id)); } catch (e) { next(e); }
  });

  router.post('/:id/deliver', (req, res, next) => {
    try { res.json(orderService.deliver(req.params.id)); } catch (e) { next(e); }
  });

  router.post('/:id/cancel', (req, res, next) => {
    try { res.json(orderService.cancel(req.params.id)); } catch (e) { next(e); }
  });

  router.post('/:id/return', (req, res, next) => {
    try { res.json(orderService.return(req.params.id)); } catch (e) { next(e); }
  });

  router.post('/:id/refund', (req, res, next) => {
    try { res.json(orderService.refund(req.params.id)); } catch (e) { next(e); }
  });

  router.get('/:id/history', (req, res, next) => {
    try { res.json(orderService.getHistory(req.params.id)); } catch (e) { next(e); }
  });

  return router;
};
