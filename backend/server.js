const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/items.js');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json({
  type: ['application/json', 'text/plain'] // Accept both JSON and plain text
}));

// MongoDB connection// Replace with your actual connection string and credentials
const mongoURI = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017/?authSource=admin';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.info('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

//routes
app.use('/api', itemRoutes);

// Start the server
app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});