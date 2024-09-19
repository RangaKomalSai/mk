// Load express module
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js"; // Your auth routes
import productRoutes from "./routes/productRoutes.js"; // Your auth routes

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
 
// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Replace <username>, <password>, and <dbname> with your actual MongoDB Atlas credentials
const uri =
  "mongodb://localhost:27017/mk";  

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
