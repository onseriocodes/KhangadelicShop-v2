// SERVER.JS
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();

connectDB();

const app = express();

// ROUTE: ROOT
app.get('/', (req, res) => {
  res.send('API IS RUNNING...');
});

// ROUTE: GET ALL PRODUCTS
app.get('/api/products', (req, res) => {
  res.json(products);
});

// ROUTE: GET SINGLE PRODUCT:
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
