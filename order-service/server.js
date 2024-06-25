const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 3002;

mongoose.connect('mongodb+srv://shamodchamaththa:chamaththa123@cluster0.jbqtuwa.mongodb.net/learn_microservice?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the MongoDB database successfully');
})
.catch((error) => {
  console.error('Error connecting to the MongoDB database', error);
});

app.use(express.json());
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Order service listening on port ${PORT}`);
});
