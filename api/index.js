import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Access the MongoDB URI from the environment variable
const mongoUri = process.env.MONGO;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB!!");
    
    // Your MongoDB-connected code can go here
    
    const app = express();
    app.listen(3000, () => {
      console.log('Server is running on port 3000!!!!');
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
