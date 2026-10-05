import express from 'express';
import { defaultSkills } from '../utils/seedData.js';

const router = express.Router();

// @desc    Get all skills categorized
// @route   GET /api/skills
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    count: defaultSkills.length,
    data: defaultSkills,
  });
});

export default router;
