import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Dal Bhat', 'Momo', 'Noodles', 'Curry', 'Snacks', 'Beverages', 'Desserts']
  },
  image: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String
  }],
  isVegetarian: {
    type: Boolean,
    default: false
  },
  spiceLevel: {
    type: String,
    enum: ['Mild', 'Medium', 'Spicy', 'Very Spicy'],
    default: 'Medium'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: String,
    rating: Number,
    date: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

export default mongoose.model('Product', productSchema);