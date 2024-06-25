const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(cors()); 
const PORT = 3001;

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
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`User service listening on port ${PORT}`);
});
