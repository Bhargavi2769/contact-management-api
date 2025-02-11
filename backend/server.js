import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './routes/contacts.js'; // Ensure the correct file extension

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/contacts', contactRoutes);
app.use(express.json()); // ✅ Required for JSON body parsing


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Server listening
// const PORT = process.env.PORT || 5000;
const PORT = process.env.NODE_ENV === 'test' ? 5001 : process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app; // ✅ Export for testing
