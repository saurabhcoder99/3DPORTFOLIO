import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.route('/')
  .post(validateContactInput, submitContact)
  .get(getContacts);

export default router;
