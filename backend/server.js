const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const sambaRoutes = require('./samba'); // Import samba.js for API routes

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/toyotaDB')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Car schema and model
const carSchema = new mongoose.Schema({
  model: String,
  category: String,
  fuel: String,
  fuel_efficiency: Number,
  year: Number
});

const Car = mongoose.model('Car', carSchema);

// API routes for car data (fuel efficiency, category, model)
app.get('/api/fuel-efficiency/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const cars = await Car.find({ category }).sort({ year: 1 });
    if (!cars.length) {
      return res.status(404).json({ message: `No cars found in the ${category} category` });
    }

    const groupedData = {};
    cars.forEach(item => {
      if (!groupedData[item.model]) {
        groupedData[item.model] = [];
      }
      groupedData[item.model].push({
        year: item.year,
        fuel_efficiency: item.fuel_efficiency
      });
    });

    const averageFuelEfficiency = cars.reduce((sum, item) => sum + item.fuel_efficiency, 0) / cars.length;

    res.json({ groupedData, averageFuelEfficiency });
  } catch (err) {
    console.error('Error retrieving data for category:', err);
    res.status(500).json({ message: 'Error retrieving data for category' });
  }
});

app.get('/api/fuel-efficiency/model/:model', async (req, res) => {
  const { model } = req.params;
  try {
    const cars = await Car.find({ model }).sort({ year: 1 });
    if (!cars.length) {
      return res.status(404).json({ message: `No cars found for the ${model} model` });
    }

    const groupedData = {};
    cars.forEach(item => {
      if (!groupedData[item.model]) {
        groupedData[item.model] = [];
      }
      groupedData[item.model].push({
        year: item.year,
        fuel_efficiency: item.fuel_efficiency
      });
    });

    const averageFuelEfficiency = cars.reduce((sum, item) => sum + item.fuel_efficiency, 0) / cars.length;

    res.json({ groupedData, averageFuelEfficiency });
  } catch (err) {
    console.error('Error retrieving data for model:', err);
    res.status(500).json({ message: 'Error retrieving data for model' });
  }
});

// Use Samba routes
app.use(sambaRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
