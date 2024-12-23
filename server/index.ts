import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();
app.use(cors());
app.use(express.json());

// Redirecting "/auth" to authRoutes.
app.use("/auth",authRoutes);

const PORT = 8080;
const mongoUrl = "mongodb://localhost:27017/users";

mongoose.connect(mongoUrl)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})