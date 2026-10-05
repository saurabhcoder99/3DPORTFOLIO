// Contact input validation middleware
export const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters long.');
  }

  if (!email || typeof email !== 'string') {
    errors.push('Email is required.');
  } else {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email.trim())) {
      errors.push('Please enter a valid email address.');
    }
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
    errors.push('Subject is required and must be at least 3 characters long.');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters long.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  // Sanitize trimmed values
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.subject = subject.trim();
  req.body.message = message.trim();

  next();
};
