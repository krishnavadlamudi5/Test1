import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://krishnavadlamudi:<db_password>@zenzo.abnep.mongodb.net/?retryWrites=true&majorityAppName=zenzo';

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI.replace('<db_password>', 'Krishna1704'));
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  scores: {
    section1: Number,
    section2: Number,
    section3: Number,
    total: Number,
  },
  category: { type: String, enum: ['Poor', 'Moderate', 'Excellent'] },
  recommendations: [String],
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);