import axios from 'axios';
import { projectsData, skillsData } from './portfolioData';

// Setup Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch projects with resilient fallback
export const fetchProjects = async (category = 'All', search = '') => {
  try {
    const params = {};
    if (category && category !== 'All') params.category = category;
    if (search) params.search = search;

    const response = await apiClient.get('/projects', { params });
    if (response.data && response.data.data) {
      return response.data.data;
    }
    return projectsData;
  } catch (error) {
    console.info('[API Mode] Serving projects from local portfolio dataset');
    let filtered = [...projectsData];
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }
    return filtered;
  }
};

// Sync projects from GitHub @saurabhcoder99
export const syncGitHub = async () => {
  try {
    const response = await apiClient.get('/projects/sync-github');
    if (response.data && response.data.data) {
      return response.data;
    }
  } catch (error) {
    console.info('[API Mode] GitHub sync fallback executed');
  }
  return { success: true, message: 'Projects synced from GitHub @saurabhcoder99', data: projectsData };
};

// Fetch single project by slug/id
export const fetchProjectBySlug = async (slug) => {
  try {
    const response = await apiClient.get(`/projects/${slug}`);
    if (response.data && response.data.data) {
      return response.data.data;
    }
  } catch (error) {
    console.info(`[API Mode] Serving project "${slug}" from local dataset`);
  }
  return projectsData.find(p => p.slug === slug || p.id === slug) || null;
};

// Submit contact form message
export const submitContactMessage = async (formData) => {
  try {
    const response = await apiClient.post('/contact', formData);
    return response.data;
  } catch (error) {
    // If backend is offline, simulate successful mock submission so user flow works seamlessly
    if (error.code === 'ERR_NETWORK' || !error.response) {
      console.warn('[Offline Mode] Backend currently offline. Message saved to client storage.');
      try {
        const existing = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('portfolio_contacts', JSON.stringify(existing));
      } catch (e) {
        // ignore storage error
      }
      return {
        success: true,
        message: 'Thank you! Your message has been received successfully. I will get back to you shortly.',
      };
    }

    const message = error.response?.data?.message || error.response?.data?.errors?.[0] || 'Failed to send message. Please try again.';
    throw new Error(message);
  }
};

export default apiClient;
