const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Replace the connection URL below with your MongoDB Atlas cluster URL
mongoose.connect('mongodb+srv://meghagangnani2001:Meghaga7@cluste.febk81m.mongodb.net/comp3123_Assignment1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const userRoutes = require('./routes/user');
const empRoutes = require('./routes/emp');

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', empRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: false, message: 'Internal Server Error' });
});

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://meghagangnani2001:Meghaga7@cluste.febk81m.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    // Your MongoDB operations go here
  } finally {
    await client.close();
  }
}

connectToMongoDB();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

