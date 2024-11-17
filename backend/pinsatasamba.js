const axios = require('axios');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const Car = require('./cardatabase'); // Assuming carDatabase exports the Car model
require('dotenv').config(); // Load environment variables

// Samba Nova API configuration
const SAMBA_API_URL = 'https://api.sambanova.com/analyze'; // Replace with the actual Samba Nova API endpoint
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
const getAnalysis = async (carData) => {
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
      },
      { headers: { Authorization: `Bearer ${SAMBA_API_KEY}` } }
    );
    return response.data;
  } catch (err) {
    console.error('Error calling Samba Nova API:', err.response?.data || err.message);
    throw err;
  }
};

// Function to create a description of the analysis
const createDescription = (analysis) => {
  const description = {
    category: analysis.category,
    models: analysis.models,
    fuelEfficiency: analysis.fuelEfficiency,
    sustainability: analysis.sustainability,
    solution: analysis.solution,
  };

  return description;
};

// API endpoint to get analysis for all models
router.post('/api/pinata/samba/analyze/all', async (req, res) => {
  try {
    const cars = await fetchCarData();
    const analysis = await getAnalysis(cars);
    const description = createDescription(analysis);
    res.json(description);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching analysis', error: err.message });
  }
});

module.exports = router;
