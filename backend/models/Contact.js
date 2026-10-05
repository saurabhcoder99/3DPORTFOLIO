import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        'Please provide a valid email address',
      ],
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
      trim: true,
      minlength: [3, 'Subject must be at least 3 characters'],
      maxlength: [150, 'Subject cannot exceed 150 characters'],
    },
    message: {
      type: String,
      required: [true, 'Please provide your message'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters'],
      maxlength: [5000, 'Message cannot exceed 5000 characters'],
    },
    status: {
      type: String,
      enum: ['unread', 'read', 'replied'],
      default: 'unread',
    },
    ipAddress: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.model('Contact', contactSchema);
