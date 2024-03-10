import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user.route.js';  // Make sure to adjust the path to your user.route.js file

// Load environment variables from .env file
dotenv.config();

// Access the MongoDB URI from the environment variable
const mongoUri = process.env.MONGO;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB!!");
    
    // Create the Express app
    const app = express();

    // Middleware to parse JSON
    //app.use(express.json());

    // Use the UserRoute for /api/user path
    app.use('/api/user', UserRouter);

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}!!!!`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
