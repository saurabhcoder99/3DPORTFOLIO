import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/saurabh_portfolio', {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`\x1b[32m✔ MongoDB Connected: ${conn.connection.host}\x1b[0m`);
    return true;
  } catch (error) {
    console.warn(`\x1b[33m⚠ MongoDB Connection Warning: ${error.message}\x1b[0m`);
    console.warn(`\x1b[33mℹ The backend will continue running and serve fallback seed data if MongoDB is offline.\x1b[0m`);
    return false;
  }
};
