const axios = require('axios');
const express = require('express');
const router = express.Router();
const Car = require('./cardatabase'); // Assuming carDatabase exports the Car model
require('dotenv').config(); // Load environment variables

// Samba Nova API configuration
const SAMBA_API_URL = 'https://api.sambanova.com/predict'; // Replace with the actual Samba Nova API endpoint
const SAMBA_API_KEY = process.env.SAMBA_API_KEY; // Load the API key from .env file

// Function to get data from MongoDB
const fetchCarData = async () => {
  try {
    const cars = await Car.find({});
    return cars;
  } catch (err) {
    console.error('Error fetching car data:', err);
    throw err;
  }
};

// Function to send data to Samba Nova API
const getPredictions = async (carData) => {
  try {
    const response = await axios.post(
      SAMBA_API_URL,
      {
        data: carData.map((car) => ({
          model: car.model,
          category: car.category,
          fuel: car.fuel,
          fuel_efficiency: car.fuel_efficiency,
          year: car.year,
        })),
        future_years: [2026],
        past_years: [2021, 2022, 2023, 2024, 2025],
      },
      { headers: { Authorization: `Bearer ${SAMBA_API_KEY}` } }
    );
    return response.data;
  } catch (err) {
    console.error('Error calling Samba Nova API:', err.response?.data || err.message);
    throw err;
  }
};

// Function to create a description of the future (2026) predicted fuel, fuel efficiency, and sustainability of a category and its models
const createDescription = (predictions) => {
  const descriptions = {};
  predictions.forEach((prediction) => {
    const category = prediction.category;
    const model = prediction.model;
    const fuel = prediction.fuel;
    const fuelEfficiency = prediction.fuel_efficiency;
    const sustainability = prediction.sustainability;

    if (!descriptions[category]) {
      descriptions[category] = {};
    }

    descriptions[category][model] = {
      fuel: `In 2026, ${model} is expected to run on ${fuel} fuel.`,
      fuelEfficiency: `In 2026, ${model} is expected to have a fuel efficiency of ${fuelEfficiency} MPG.`,
      sustainability: `In 2026, ${model} is expected to have a sustainability score of ${sustainability}.`,
    };
  });

  return descriptions;
};

// API endpoint to get predictions for all models
router.post('/api/samba/predict/all', async (req, res) => {
  try {
    const cars = await fetchCarData();
    const predictions = await getPredictions(cars);
    const descriptions = createDescription(predictions);
    res.json(descriptions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching predictions', error: err.message });
  }
});

module.exports = router;
