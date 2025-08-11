import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User.js';
import Product from './models/Product.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});

    // Create admin user
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@nepalithali.com',
      password: 'password123',
      phone: '+977-1-234567',
      address: {
        street: 'Admin Street',
        city: 'Kathmandu',
        state: 'Bagmati',
        zipCode: '44600'
      },
      isAdmin: true
    });
    await adminUser.save();

    // Create regular user
    const regularUser = new User({
      name: 'Test User',
      email: 'user@example.com',
      password: 'password123',
      phone: '+977-9876543210',
      address: {
        street: 'Test Street',
        city: 'Pokhara',
        state: 'Gandaki',
        zipCode: '33700'
      },
      isAdmin: false
    });
    await regularUser.save();

    // Sample products
    const products = [
      {
        name: 'Traditional Dal Bhat',
        description: 'Authentic Nepali meal with steamed rice, lentil soup, vegetable curry, pickles, and papad',
        price: 250,
        category: 'Dal Bhat',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        ingredients: ['Rice', 'Lentils', 'Vegetables', 'Spices'],
        isVegetarian: true,
        spiceLevel: 'Medium',
        inStock: true,
        rating: 4.5
      },
      {
        name: 'Chicken Momo',
        description: 'Steamed dumplings filled with seasoned chicken, served with spicy tomato chutney',
        price: 180,
        category: 'Momo',
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
        ingredients: ['Chicken', 'Flour', 'Onions', 'Spices'],
        isVegetarian: false,
        spiceLevel: 'Medium',
        inStock: true,
        rating: 4.8
      },
      {
        name: 'Vegetable Momo',
        description: 'Steamed dumplings filled with fresh vegetables and herbs, perfect for vegetarians',
        price: 150,
        category: 'Momo',
        image: 'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg',
        ingredients: ['Cabbage', 'Carrots', 'Onions', 'Flour'],
        isVegetarian: true,
        spiceLevel: 'Mild',
        inStock: true,
        rating: 4.3
      },
      {
        name: 'Thukpa Noodle Soup',
        description: 'Hearty Tibetan-style noodle soup with vegetables and aromatic broth',
        price: 220,
        category: 'Noodles',
        image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
        ingredients: ['Noodles', 'Vegetables', 'Broth', 'Herbs'],
        isVegetarian: true,
        spiceLevel: 'Medium',
        inStock: true,
        rating: 4.2
      },
      {
        name: 'Chicken Curry',
        description: 'Tender chicken cooked in rich, aromatic Nepali spices and served with rice',
        price: 280,
        category: 'Curry',
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices'],
        isVegetarian: false,
        spiceLevel: 'Spicy',
        inStock: true,
        rating: 4.6
      },
      {
        name: 'Sel Roti',
        description: 'Traditional ring-shaped rice bread, sweet and crispy, perfect for festivals',
        price: 80,
        category: 'Snacks',
        image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg',
        ingredients: ['Rice flour', 'Sugar', 'Milk', 'Ghee'],
        isVegetarian: true,
        spiceLevel: 'Mild',
        inStock: true,
        rating: 4.1
      },
      {
        name: 'Masala Tea',
        description: 'Traditional spiced tea with cardamom, ginger, and other aromatic spices',
        price: 60,
        category: 'Beverages',
        image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
        ingredients: ['Tea leaves', 'Milk', 'Sugar', 'Spices'],
        isVegetarian: true,
        spiceLevel: 'Mild',
        inStock: true,
        rating: 4.4
      },
      {
        name: 'Kheer',
        description: 'Creamy rice pudding flavored with cardamom and garnished with nuts',
        price: 120,
        category: 'Desserts',
        image: 'https://images.pexels.com/photos/7045836/pexels-photo-7045836.jpeg',
        ingredients: ['Rice', 'Milk', 'Sugar', 'Cardamom', 'Nuts'],
        isVegetarian: true,
        spiceLevel: 'Mild',
        inStock: true,
        rating: 4.3
      }
    ];

    await Product.insertMany(products);

    console.log('✅ Database seeded successfully!');
    console.log('👤 Admin user: admin@nepalithali.com / password123');
    console.log('👤 Test user: user@example.com / password123');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();