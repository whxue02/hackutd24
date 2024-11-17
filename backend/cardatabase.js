const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb+srv://hack:utd@hackutd24.z0b9c.mongodb.net/')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


// Define the schema
const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    // enum: ['runner', 'avalon', 'c-hr', 'camry', 'corolla', 'corolla cross', 'corolla hatchback', 'gr corolla', 'gr86', 'grand highlander', 'grand highlander limited', 'highlander', 'land cruiser', 'land cruiser wagon', 'prius', 'prius eco', 'rav4', 'rav4 offroad', 'sequoia', 'sienna', 'tacoma', 'tacoma mt', 'toyota crown', 'toyota crown signia', 'tundra', 'venza']
    
  }, // List of 13 Toyota models
  category: {
    type: String,
    required: true,
    // enum: ['coup', 'minivan', 'sedan', 'suv', 'truck']
  }, // Categories: Minivan, Truck, Sedan, Coupe, SUV
  fuel: {
    type: String,
    required: true,
    // enum: ['gasoline'] // Added 'Hydrogen'
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
  {model: 'c-hr', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 29, year: 2021},
  {model: 'corolla', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 32.875, year: 2021},
  {model: 'corolla hatchback', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 33, year: 2021},
  {model: 'avalon', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 26, year: 2021},
  {model: 'camry', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 28.1428571428571, year: 2021},
  {model: 'prius', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 50.5, year: 2021},
  {model: 'prius eco', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 56, year: 2021},
  {model: 'tacoma', category: 'truck', fuel: 'gasoline', fuel_efficiency: 19.6666666666667, year: 2021},
  {model: 'tundra', category: 'truck', fuel: 'gasoline', fuel_efficiency: 14.5, year: 2021},
  {model: 'sienna', category: 'minivan', fuel: 'gasoline', fuel_efficiency: 35.5, year: 2021},
  {model: 'highlander', category: 'suv', fuel: 'gasoline', fuel_efficiency: 23.3333333333333, year: 2021},
  {model: 'rav4', category: 'suv', fuel: 'gasoline', fuel_efficiency: 29.4, year: 2021},
  {model: 'rav4 offroad', category: 'suv', fuel: 'gasoline', fuel_efficiency: 28, year: 2021},
  {model: 'venza', category: 'suv', fuel: 'gasoline', fuel_efficiency: 39, year: 2021},
  {model: '4runner', category: 'suv', fuel: 'gasoline', fuel_efficiency: 17, year: 2021},
  {model: 'sequoia', category: 'suv', fuel: 'gasoline', fuel_efficiency: 14.5, year: 2021},
  {model: 'land cruiser wagon', category: 'suv', fuel: 'gasoline', fuel_efficiency: 14, year: 2021},
  {model: 'gr86', category: 'coup', fuel: 'gasoline', fuel_efficiency: 23.5, year: 2022},
  {model: 'c-hr', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 29, year: 2022},
  {model: 'corolla', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 32.875, year: 2022},
  {model: 'corolla hatchback', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 33, year: 2022},
  {model: 'avalon', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 25.5, year: 2022},
  {model: 'camry', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 28.1428571428571, year: 2022},
  {model: 'prius', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 50.5, year: 2022},
  {model: 'prius eco', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 56, year: 2022},
  {model: 'tacoma', category: 'truck', fuel: 'gasoline', fuel_efficiency: 19.6666666666667, year: 2022},
  {model: 'tundra', category: 'truck', fuel: 'gasoline', fuel_efficiency: 19.8571428571429, year: 2022},
  {model: 'sienna', category: 'minivan', fuel: 'gasoline', fuel_efficiency: 35.5, year: 2022},
  {model: 'corolla cross', category: 'suv', fuel: 'gasoline', fuel_efficiency: 31, year: 2022},
  {model: 'highlander', category: 'suv', fuel: 'gasoline', fuel_efficiency: 23.3333333333333, year: 2022},
  {model: 'rav4', category: 'suv', fuel: 'gasoline', fuel_efficiency: 29.4, year: 2022},
  {model: 'rav4 offroad', category: 'suv', fuel: 'gasoline', fuel_efficiency: 28, year: 2022},
  {model: 'venza', category: 'suv', fuel: 'gasoline', fuel_efficiency: 39, year: 2022},
  {model: '4runner', category: 'suv', fuel: 'gasoline', fuel_efficiency: 17, year: 2022},
  {model: 'sequoia', category: 'suv', fuel: 'gasoline', fuel_efficiency: 14.5, year: 2022},
  {model: 'gr86', category: 'coup', fuel: 'gasoline', fuel_efficiency: 23.5, year: 2023},
  {model: 'gr corolla', category: 'coup', fuel: 'gasoline', fuel_efficiency: 24, year: 2023},
  {model: 'corolla', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 34.5, year: 2023},
  {model: 'corolla hatchback', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 34, year: 2023},
  {model: 'camry', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 28.625, year: 2023},
  {model: 'prius', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 53, year: 2023},
  {model: 'toyota crown', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 35.5, year: 2023},
  {model: 'tacoma', category: 'truck', fuel: 'gasoline', fuel_efficiency: 19.6666666666667, year: 2023},
  {model: 'tundra', category: 'truck', fuel: 'gasoline', fuel_efficiency: 19.8571428571429, year: 2023},
  {model: 'sienna', category: 'minivan', fuel: 'gasoline', fuel_efficiency: 35.5, year: 2023},
  {model: 'corolla cross', category: 'suv', fuel: 'gasoline', fuel_efficiency: 31, year: 2023},
  {model: 'highlander', category: 'suv', fuel: 'gasoline', fuel_efficiency: 24.3333333333333, year: 2023},
  {model: 'rav4', category: 'suv', fuel: 'gasoline', fuel_efficiency: 29.4, year: 2023},
  {model: 'rav4 offroad', category: 'suv', fuel: 'gasoline', fuel_efficiency: 28, year: 2023},
  {model: 'venza', category: 'suv', fuel: 'gasoline', fuel_efficiency: 39, year: 2023},
  {model: '4runner', category: 'suv', fuel: 'gasoline', fuel_efficiency: 17, year: 2023},
  {model: 'sequoia', category: 'suv', fuel: 'gasoline', fuel_efficiency: 21, year: 2023},
  {model: 'gr86', category: 'coup', fuel: 'gasoline', fuel_efficiency: 23, year: 2024},
  {model: 'gr corolla', category: 'subcompact cars', fuel: 'gasoline', fuel_efficiency: 24, year: 2024},
  {model: 'corolla', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 34.5, year: 2024},
  {model: 'corolla hatchback', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 34, year: 2024},
  {model: 'camry', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 28.1428571428571, year: 2024},
  {model: 'prius', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 53, year: 2024},
  {model: 'toyota crown', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 35.5, year: 2024},
  {model: 'tacoma', category: 'truck', fuel: 'gasoline', fuel_efficiency: 21.7142857142857, year: 2024},
  {model: 'tacoma mt', category: 'truck', fuel: 'gasoline', fuel_efficiency: 20, year: 2024},
  {model: 'tundra', category: 'truck', fuel: 'gasoline', fuel_efficiency: 19.9230769230769, year: 2024},
  {model: 'sienna', category: 'minivan', fuel: 'gasoline', fuel_efficiency: 35.5, year: 2024},
  {model: 'corolla cross', category: 'suv', fuel: 'gasoline', fuel_efficiency: 31, year: 2024},
  {model: 'highlander', category: 'suv', fuel: 'gasoline', fuel_efficiency: 24.3333333333333, year: 2024},
  {model: 'rav4', category: 'suv', fuel: 'gasoline', fuel_efficiency: 29.25, year: 2024},
  {model: 'rav4 offroad', category: 'suv', fuel: 'gasoline', fuel_efficiency: 28, year: 2024},
  {model: 'venza', category: 'suv', fuel: 'gasoline', fuel_efficiency: 39, year: 2024},
  {model: '4runner', category: 'suv', fuel: 'gasoline', fuel_efficiency: 17, year: 2024},
  {model: 'grand highlander', category: 'suv', fuel: 'gasoline', fuel_efficiency: 23.5, year: 2024},
  {model: 'grand highlander limited', category: 'suv', fuel: 'gasoline', fuel_efficiency: 24, year: 2024},
  {model: 'sequoia', category: 'suv', fuel: 'gasoline', fuel_efficiency: 21, year: 2024},
  {model: 'land cruiser', category: 'suv', fuel: 'gasoline', fuel_efficiency: 23, year: 2024},
  {model: 'gr corolla', category: 'coup', fuel: 'gasoline', fuel_efficiency: 23, year: 2025},
  {model: 'corolla', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 34.25, year: 2025},
  {model: 'corolla hatchback', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 34, year: 2025},
  {model: 'camry', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 47.6, year: 2025},
  {model: 'toyota crown', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 35.5, year: 2025},
  {model: 'toyota crown signia', category: 'sedan', fuel: 'gasoline', fuel_efficiency: 38, year: 2025},
  {model: 'tundra', category: 'truck', fuel: 'gasoline', fuel_efficiency: 19.8571428571429, year: 2025},
  {model: 'sequoia', category: 'suv', fuel: 'gasoline', fuel_efficiency: 21, year: 2025},
  ]


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
