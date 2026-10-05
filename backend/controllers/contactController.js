import { Contact } from '../models/Contact.js';
import { sendEmail } from '../utils/sendEmail.js';
import mongoose from 'mongoose';

// In-memory fallback message storage when MongoDB is not connected
const inMemoryContacts = [];

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress || '';

    let savedContact = null;
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      savedContact = await Contact.create({
        name,
        email,
        subject,
        message,
        ipAddress,
      });
    } else {
      savedContact = {
        _id: 'local_' + Date.now(),
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
        status: 'stored_locally',
      };
      inMemoryContacts.push(savedContact);
    }

    // Attempt email dispatch in background
    let emailStatus = { sent: false };
    try {
      await sendEmail({ name, email, subject, message });
      emailStatus.sent = true;
    } catch (mailError) {
      console.warn(`[Nodemailer Notice] Email dispatch skipped: ${mailError.message}`);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully. I will get back to you shortly.',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (Admin/Dashboard)
// @route   GET /api/contact
// @access  Public
export const getContacts = async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    let contacts = [];

    if (isDbConnected) {
      contacts = await Contact.find().sort({ createdAt: -1 });
    } else {
      contacts = [...inMemoryContacts].reverse();
    }

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};
