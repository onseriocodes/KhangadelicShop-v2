//! SERVER.JS
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

// IMPORTED ROUTES:
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();
const app = express();

// ROOT
app.get('/', (req, res) => {
  res.send('API IS RUNNING...');
});

// MOUTED ROUTES:
app.use('/api/products', productRoutes);

// CUSTOM ERROR MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
