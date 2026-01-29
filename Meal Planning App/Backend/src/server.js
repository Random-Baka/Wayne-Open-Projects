import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import ingredientRoutes from './routes/ingredientRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Port configuration using environment variable or default port
const PORT = process.env.PORT || 3650;

// Body parser configuration to handle large payloads
app.use(bodyParser.json({ limit: "15mb", extended: true}));

// URL-encoded data parser with size limit
app.use(bodyParser.urlencoded({ limit: "15mb", extended: true}));

// Enable CORS for all routes
app.use(cors());

// Routes
app.use("/api/ingredients", ingredientRoutes);

// Basic route to check server status
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Start the server after successful database connection.
connectDB().then(() => {
  console.log("Connected to the database successfully.");
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
}).catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1); // Exit the process with failure.
});