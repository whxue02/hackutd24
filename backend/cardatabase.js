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
  year: { 
    type: Number, 
    required: true, 
    enum: [2021, 2022, 2023, 2024, 2025] // Allowed years between 2021-2025
  } // Year field
});

// Create the model
const Car = mongoose.model('Car', carSchema);

// Hardcoded data for seeding with different fuel efficiencies for each year
const carData = [
  // Camry (Sedan)
  { model: 'Camry', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 52, year: 2021 },
  { model: 'Camry', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 54, year: 2022 },
  { model: 'Camry', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 56, year: 2023 },
  { model: 'Camry', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 58, year: 2024 },
  { model: 'Camry', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 60, year: 2025 },

  // Corolla (Sedan)
  { model: 'Corolla', category: 'Sedan', fuel: 'Gasoline', fuel_efficiency: 33, year: 2021 },
  { model: 'Corolla', category: 'Sedan', fuel: 'Gasoline', fuel_efficiency: 35, year: 2022 },
  { model: 'Corolla', category: 'Sedan', fuel: 'Gasoline', fuel_efficiency: 37, year: 2023 },
  { model: 'Corolla', category: 'Sedan', fuel: 'Gasoline', fuel_efficiency: 39, year: 2024 },
  { model: 'Corolla', category: 'Sedan', fuel: 'Gasoline', fuel_efficiency: 41, year: 2025 },

  // Prius (Sedan)
  { model: 'Prius', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 58, year: 2021 },
  { model: 'Prius', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 60, year: 2022 },
  { model: 'Prius', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 62, year: 2023 },
  { model: 'Prius', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 64, year: 2024 },
  { model: 'Prius', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 66, year: 2025 },

  // RAV4 (SUV)
  { model: 'RAV4', category: 'SUV', fuel: 'Electric', fuel_efficiency: 120, year: 2021 },
  { model: 'RAV4', category: 'SUV', fuel: 'Electric', fuel_efficiency: 125, year: 2022 },
  { model: 'RAV4', category: 'SUV', fuel: 'Electric', fuel_efficiency: 130, year: 2023 },
  { model: 'RAV4', category: 'SUV', fuel: 'Electric', fuel_efficiency: 135, year: 2024 },
  { model: 'RAV4', category: 'SUV', fuel: 'Electric', fuel_efficiency: 140, year: 2025 },

  // Highlander (SUV)
  { model: 'Highlander', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 29, year: 2021 },
  { model: 'Highlander', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 30, year: 2022 },
  { model: 'Highlander', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 32, year: 2023 },
  { model: 'Highlander', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 34, year: 2024 },
  { model: 'Highlander', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 36, year: 2025 },

  // Avalon (Sedan)
  { model: 'Avalon', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 44, year: 2021 },
  { model: 'Avalon', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 46, year: 2022 },
  { model: 'Avalon', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 48, year: 2023 },
  { model: 'Avalon', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 50, year: 2024 },
  { model: 'Avalon', category: 'Sedan', fuel: 'Hybrid', fuel_efficiency: 52, year: 2025 },

  // Supra (Coupe)
  { model: 'Supra', category: 'Coupe', fuel: 'Gasoline', fuel_efficiency: 31, year: 2021 },
  { model: 'Supra', category: 'Coupe', fuel: 'Gasoline', fuel_efficiency: 32, year: 2022 },
  { model: 'Supra', category: 'Coupe', fuel: 'Gasoline', fuel_efficiency: 33, year: 2023 },
  { model: 'Supra', category: 'Coupe', fuel: 'Gasoline', fuel_efficiency: 34, year: 2024 },
  { model: 'Supra', category: 'Coupe', fuel: 'Gasoline', fuel_efficiency: 35, year: 2025 },

  // Tacoma (Truck)
  { model: 'Tacoma', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 21, year: 2021 },
  { model: 'Tacoma', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 22, year: 2022 },
  { model: 'Tacoma', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 23, year: 2023 },
  { model: 'Tacoma', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 24, year: 2024 },
  { model: 'Tacoma', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 25, year: 2025 },

  // Mirai (Sedan)
  { model: 'Mirai', category: 'Sedan', fuel: 'Hydrogen', fuel_efficiency: 67, year: 2021 },
  { model: 'Mirai', category: 'Sedan', fuel: 'Hydrogen', fuel_efficiency: 70, year: 2022 },
  { model: 'Mirai', category: 'Sedan', fuel: 'Hydrogen', fuel_efficiency: 73, year: 2023 },
  { model: 'Mirai', category: 'Sedan', fuel: 'Hydrogen', fuel_efficiency: 75, year: 2024 },
  { model: 'Mirai', category: 'Sedan', fuel: 'Hydrogen', fuel_efficiency: 78, year: 2025 },

  // Sienna (Minivan)
  { model: 'Sienna', category: 'Minivan', fuel: 'Hybrid', fuel_efficiency: 36, year: 2021 },
  { model: 'Sienna', category: 'Minivan', fuel: 'Hybrid', fuel_efficiency: 38, year: 2022 },
  { model: 'Sienna', category: 'Minivan', fuel: 'Hybrid', fuel_efficiency: 40, year: 2023 },
  { model: 'Sienna', category: 'Minivan', fuel: 'Hybrid', fuel_efficiency: 42, year: 2024 },
  { model: 'Sienna', category: 'Minivan', fuel: 'Hybrid', fuel_efficiency: 44, year: 2025 },

  // Odyssey (Minivan)
  { model: 'Odyssey', category: 'Minivan', fuel: 'Gasoline', fuel_efficiency: 22, year: 2021 },
  { model: 'Odyssey', category: 'Minivan', fuel: 'Gasoline', fuel_efficiency: 23, year: 2022 },
  { model: 'Odyssey', category: 'Minivan', fuel: 'Gasoline', fuel_efficiency: 24, year: 2023 },
  { model: 'Odyssey', category: 'Minivan', fuel: 'Gasoline', fuel_efficiency: 25, year: 2024 },
  { model: 'Odyssey', category: 'Minivan', fuel: 'Gasoline', fuel_efficiency: 26, year: 2025 },

  // Land Cruiser (SUV)
  { model: 'Land Cruiser', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 15, year: 2021 },
  { model: 'Land Cruiser', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 16, year: 2022 },
  { model: 'Land Cruiser', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 17, year: 2023 },
  { model: 'Land Cruiser', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 18, year: 2024 },
  { model: 'Land Cruiser', category: 'SUV', fuel: 'Gasoline', fuel_efficiency: 19, year: 2025 },

  // Tundra (Truck)
  { model: 'Tundra', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 17, year: 2021 },
  { model: 'Tundra', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 18, year: 2022 },
  { model: 'Tundra', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 19, year: 2023 },
  { model: 'Tundra', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 20, year: 2024 },
  { model: 'Tundra', category: 'Truck', fuel: 'Gasoline', fuel_efficiency: 21, year: 2025 },
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
