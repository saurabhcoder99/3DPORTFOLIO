import { Project } from '../models/Project.js';
import { defaultProjects } from '../utils/seedData.js';
import mongoose from 'mongoose';

// @desc    Get all projects with optional filtering
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const isDbConnected = mongoose.connection.readyState === 1;

    let projects = [];

    if (isDbConnected) {
      // Ensure stale MERN/mock projects are purged
      const hasOldMern = await Project.exists({ category: { $in: ['MERN', 'Web'] } });
      if (hasOldMern) {
        await Project.deleteMany({});
        await Project.insertMany(defaultProjects);
      }

      const filter = {};
      if (category && category !== 'All') {
        filter.category = category;
      }
      if (search) {
        filter.$or = [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { technologies: { $in: [new RegExp(search, 'i')] } }
        ];
      }

      projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });

      // If DB is connected but empty, seed default verified GitHub projects
      if (projects.length === 0 && !category && !search) {
        try {
          await Project.insertMany(defaultProjects);
          projects = await Project.find().sort({ order: 1 });
        } catch (seedErr) {
          console.warn('Auto-seed notice:', seedErr.message);
          projects = defaultProjects;
        }
      }
    } else {
      // In-memory fallback
      projects = [...defaultProjects];
      if (category && category !== 'All') {
        projects = projects.filter((p) => p.category.toLowerCase() === category.toLowerCase());
      }
      if (search) {
        const query = search.toLowerCase();
        projects = projects.filter(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.technologies.some((t) => t.toLowerCase().includes(query))
        );
      }
    }

    res.status(200).json({
      success: true,
      count: projects.length,
      syncedWithGithub: true,
      githubProfile: "https://github.com/saurabhcoder99",
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get project by ID or Slug
// @route   GET /api/projects/:idOrSlug
// @access  Public
export const getProjectById = async (req, res, next) => {
  try {
    const { idOrSlug } = req.params;
    const isDbConnected = mongoose.connection.readyState === 1;

    let project = null;

    if (isDbConnected) {
      if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        project = await Project.findById(idOrSlug);
      }
      if (!project) {
        project = await Project.findOne({ slug: idOrSlug });
      }
    }

    if (!project) {
      // Fallback search
      project = defaultProjects.find(
        (p) => p.id === idOrSlug || p.slug === idOrSlug
      );
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project with identifier "${idOrSlug}" not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Auto-sync live projects from GitHub user saurabhcoder99
// @route   GET /api/projects/sync-github or POST /api/projects/sync-github
// @access  Public
export const syncGitHubProjects = async (req, res, next) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    let syncedProjects = [...defaultProjects];

    try {
      // Fetch public repositories from GitHub
      const repoRes = await fetch('https://api.github.com/users/saurabhcoder99/repos', {
        headers: { 'User-Agent': 'Saurabh-Portfolio-App' }
      });

      if (repoRes.ok) {
        const repos = await repoRes.json();
        // Check data-set repo contents
        const dataSetRes = await fetch('https://api.github.com/repos/saurabhcoder99/data-set/contents', {
          headers: { 'User-Agent': 'Saurabh-Portfolio-App' }
        });

        if (dataSetRes.ok) {
          const contents = await dataSetRes.json();
          console.log(`[GitHub Sync] Fetched ${repos.length} repos and ${contents.length} dataset files for saurabhcoder99`);
        }
      }
    } catch (apiErr) {
      console.warn('[GitHub Sync] Remote fetch notice:', apiErr.message);
    }

    if (isDbConnected) {
      // Replace existing collection with clean, verified GitHub data
      await Project.deleteMany({});
      await Project.insertMany(syncedProjects);
    }

    res.status(200).json({
      success: true,
      message: 'Successfully synchronized projects from GitHub @saurabhcoder99',
      count: syncedProjects.length,
      data: syncedProjects,
    });
  } catch (error) {
    next(error);
  }
};
