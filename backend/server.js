const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'PATCH', 'POST', 'DELETE'],
  credentials: true
})); // Enable CORS for frontend requests
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

//file upload
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Setup multer for handling file uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Include file extension
  }
});

const upload = multer({ storage: storage });

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }
  // Get the file path
  const filePath = path.join(uploadDir, req.file.filename);

  // Return the file path
  res.status(200).json({
    message: 'File uploaded successfully!',
    filePath: filePath
  });
});

//file upload
