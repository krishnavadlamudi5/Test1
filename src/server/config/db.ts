import mongoose from 'mongoose';
// import { config } from '../../server/config/env.ts'; // Import the config object from env.ts

export async function connectDB(): Promise<void> {
  try {
    // Use the MongoDB URI from the config object
    const mongoURI = "mongodb+srv://krishnavadlamudi:Krishna1704@zenzzo.abnep.mongodb.net/ZenzzoLifescore?retryWrites=true&w=majority&appName=zenzzo";

    await mongoose.connect(mongoURI, {
      // Add options if necessary (modern versions of Mongoose no longer require these)
    });

    console.log('gudajdh Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with an error code
  }
}
