const express = require('express');
const Order = require('../models/orderModel');
const router = express.Router();

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).send(order);
});

router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.status(200).send(order);
});

module.exports = router;
