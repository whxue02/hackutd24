const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse incoming JSON requests


mongoose.connect('mongodb://localhost:27017/toyotaDB')
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


app.get('/api/fuel-efficiency/model/:model', async (req, res) => {
    const { model } = req.params;

 
    console.log(`Fetching data for category: ${model}`); // Debugging log
 
    try {
      // Find all cars in the specified category
      const cars = await Car.find({ model }).sort({ year: 1 });
 
      if (!cars.length) {
        console.log(`No cars found for category: ${model}`); // Debugging log
        return res.status(404).json({ message: `No cars found in the ${model} category` });
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


  app.get('/api/fuel-efficiency/year/:year', async (req, res) => {
    const { year } = req.params;

 
    console.log(`Fetching data for category: ${year}`); // Debugging log
 
    try {
      // Find all cars in the specified category
      const cars = await Car.find({ year }).sort({ category: 1 });
 
      if (!cars.length) {
        console.log(`No cars found for category: ${year}`); // Debugging log
        return res.status(404).json({ message: `No cars found in the ${year} category` });
      }
 
      // Group fuel efficiency data by year
      const groupedData = {};
      cars.forEach(item => {
        if (!groupedData[item.year]) {
          groupedData[item.year] = [];
        }
        groupedData[item.year].push({
          model: item.model,
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


  app.get('/api/fuel-efficiency/fuel/:fuel', async (req, res) => {
    const { fuel } = req.params;

 
    console.log(`Fetching data for category: ${fuel}`); // Debugging log
 
    try {
      // Find all cars in the specified category
      const cars = await Car.find({ fuel }).sort({ category: 1 });
 
      if (!cars.length) {
        console.log(`No cars found for category: ${fuel}`); // Debugging log
        return res.status(404).json({ message: `No cars found in the ${fuel} category` });
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
