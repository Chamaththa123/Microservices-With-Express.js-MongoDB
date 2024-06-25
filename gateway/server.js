const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const gatewayRoutes = require('./routes/gatewayRoutes');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors()); 
app.use('/api', gatewayRoutes);

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
