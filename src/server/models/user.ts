import mongoose from 'mongoose';

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
  category: { 
    type: String, 
    enum: ['Poor', 'Moderate', 'Excellent'],
    required: true 
  },
  recommendations: [String],
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);