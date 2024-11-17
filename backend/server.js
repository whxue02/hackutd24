const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse incoming JSON requests


mongoose.connect('mongodb+srv://hack:utd@hackutd24.z0b9c.mongodb.net/')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const carSchema = new mongoose.Schema({
  model: String,
  category: String,
  fuel: String,
  fuel_efficiency: Number,
  year: Number
});

const Car = mongoose.model('Car', carSchema);

// Endpoint to get fuel efficiency data for all models in a specific category
app.get('/api/fuel-efficiency/category/:category', async (req, res) => {
  const { category } = req.params;

  console.log(`Fetching data for category: ${category}`); // Debugging log

  try {
    // Find all cars in the specified category
    const cars = await Car.find({ category }).sort({ year: 1 });

    if (!cars.length) {
      console.log(`No cars found for category: ${category}`); // Debugging log
      return res.status(404).json({ message: `No cars found in the ${category} category` });
    }

    // Group fuel efficiency data by model
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

    // Calculate the average fuel efficiency across all models in the category
    const averageFuelEfficiency = cars.reduce((sum, item) => sum + item.fuel_efficiency, 0) / cars.length;

    console.log('Grouped Data:', groupedData); // Debugging log
    res.json({
      groupedData,
      averageFuelEfficiency
    });
  } catch (err) {
    console.error('Error retrieving data for category:', err);
    res.status(500).json({ message: 'Error retrieving data for category' });
  }
});

// Endpoint to get fuel efficiency data for a specific model
app.get('/api/fuel-efficiency/model/:model', async (req, res) => {
  const { model } = req.params; // Corrected from category to model

  console.log(`Fetching data for model: ${model}`); // Debugging log

  try {
    // Find all cars for the specified model
    const cars = await Car.find({ model }).sort({ year: 1 });

    if (!cars.length) {
      console.log(`No cars found for model: ${model}`); // Debugging log
      return res.status(404).json({ message: `No cars found for the ${model} model` });
    }

    // Group fuel efficiency data by model
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

    // Calculate the average fuel efficiency for the specified model
    const averageFuelEfficiency = cars.reduce((sum, item) => sum + item.fuel_efficiency, 0) / cars.length;

    console.log('Grouped Data:', groupedData); // Debugging log
    res.json({
      groupedData,
      averageFuelEfficiency
    });
  } catch (err) {
    console.error('Error retrieving data for model:', err);
    res.status(500).json({ message: 'Error retrieving data for model' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
