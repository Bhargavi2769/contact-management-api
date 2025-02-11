import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js'; // Ensure correct import

const router = express.Router();

// GET /contacts (Fetch all contacts)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /contacts (Create a contact)
router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('phone').isMobilePhone().withMessage('Valid phone number is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newContact = new Contact(req.body);
            await newContact.save();
            res.status(201).json({ id: newContact._id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

// GET /contacts/:id (Fetch a single contact)
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /contacts/:id (Update a contact)
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) return res.status(404).json({ message: 'Contact not found' });
        res.json(updatedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /contacts/:id (Delete a contact)
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router; // ✅ Use ES module export
