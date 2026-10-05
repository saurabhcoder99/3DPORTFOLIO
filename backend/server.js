import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive for development testing
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Base / Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'Saurabh Kumar Portfolio API',
    version: '1.0.0'
  });
});

// Mount Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
const server = app.listen(PORT, () => {
  console.log(`\x1b[32m✔ Portfolio API Server running on port ${PORT}\x1b[0m`);
  console.log(`\x1b[36mℹ Health check: http://localhost:${PORT}/api/health\x1b[0m`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection Error: ${err.message}`);
});

export default app;
