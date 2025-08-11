import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("🍛 Connected to MongoDB - NepaliThali Database"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/v1", PostRoute);

app.get("/", (req, res) => {
  res.send;
  ({
    activeStatus: true,
    error: false,
  });
});

app.get("/", (req, res) => {
  res.json({ message: "NepaliThali API is running!" });
});

app.listen(PORT, () => {
  console.log(`🚀 NepaliThali server running on port ${PORT}`);
});
