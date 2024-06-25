const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = express.Router();

router.use('/users', (req, res, next) => {
  console.log('Proxying request to User Service');
  next();
}, createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

router.use('/orders', (req, res, next) => {
  console.log('Proxying request to Order Service');
  next();
}, createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

module.exports = router;
