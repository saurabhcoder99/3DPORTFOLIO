import express from 'express';
import { getProjects, getProjectById, syncGitHubProjects } from '../controllers/projectController.js';

const router = express.Router();

router.get('/sync-github', syncGitHubProjects);
router.post('/sync-github', syncGitHubProjects);
router.get('/', getProjects);
router.get('/:idOrSlug', getProjectById);

export default router;
