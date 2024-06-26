const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define your services and their corresponding ports
const services = [
  { route: '/users', target: 'http://localhost:3001', serviceName: 'User Service' },
  { route: '/orders', target: 'http://localhost:3002', serviceName: 'Order Service' }
];

// Loop through services to create routes and proxy middleware dynamically
services.forEach(service => {
  app.use(service.route, (req, res, next) => {
    console.log(`Proxying request to ${service.serviceName}`);
    next();
  }, createProxyMiddleware({ target: service.target, changeOrigin: true }));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway started on port ${PORT}`);
});
