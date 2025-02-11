import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// ✅ Use ES module export
const Contact = mongoose.model('Contact', ContactSchema);
export default Contact;
