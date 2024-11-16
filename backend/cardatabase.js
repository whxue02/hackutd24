const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/toyotaDB')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the schema
const carSchema = new mongoose.Schema({
  model: { 
    type: String, 
    required: true, 
    enum: ['Camry', 'Corolla', 'Prius', 'RAV4', 'Highlander', 'Avalon', 'Supra', 'Tacoma', 'Mirai', 'Sienna', 'Odyssey', 'Land Cruiser', 'Tundra'] 
  }, // List of 13 Toyota models
  category: { 
    type: String, 
    required: true, 
    enum: ['Minivan', 'Truck', 'Sedan', 'Coupe', 'SUV'] 
  }, // Categories: Minivan, Truck, Sedan, Coupe, SUV
  fuel: { 
    type: String, 
    required: true, 
    enum: ['Gasoline', 'Electric', 'Hybrid', 'Hydrogen'] // Added 'Hydrogen'
  }, // Fuel types: Gasoline, Electric, Hybrid, Hydrogen
  fuel_efficiency: { 
    type: Number, 
    required: true 
  }, // Fuel efficiency (MPG or MPGe)
});

// Create the model
const Car = mongoose.model('Car', carSchema);

// Hardcoded data for seeding
const carData = [
  { model: 'Camry', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 52 },
  { model: 'Corolla', category: 'Sedan', fuel: 'Gasoline', fuel_efficiency: 33 },
  { model: 'Prius', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 58 },
  { model: 'RAV4', category: 'SUV', fuel: 'Electric', fuel_efficiency: 120 }, // MPGe
  { model: 'Highlander', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 29 },
  { model: 'Avalon', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 44 },
  { model: 'Supra', category: 'Coupe', fuel: 'Gasoline', fuel_efficiency: 31 },
  { model: 'Tacoma', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 21 },
  { model: 'Mirai', category: 'Sedan', fuel: 'Hydrogen', fuel_efficiency: 67 }, // Hydrogen fuel cell equivalent
  { model: 'Sienna', category: 'Minivan', fuel: 'Hybrid', fuel_efficiency: 36 },
  { model: 'Odyssey', category: 'Minivan', fuel: 'Gasoline', fuel_efficiency: 19 },
  { model: 'Land Cruiser', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 16 },
  { model: 'Tundra', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 15 },
];

// Seed the database
const seedDatabase = async () => {
  try {
    await Car.deleteMany(); // Clear existing data
    await Car.insertMany(carData); // Insert hardcoded data
    console.log('Database seeded successfully!');
    mongoose.connection.close(); // Close connection
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  }
};

// Run the seed function
seedDatabase();
