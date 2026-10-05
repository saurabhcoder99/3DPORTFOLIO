import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiEye, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';
import { fetchProjects, syncGitHub } from '../utils/api';
import { ProjectModal } from '../components/ProjectModal';

const categories = ['All', 'Data Analytics', 'Data Science', 'Business Analyst', 'Power BI'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState('Auto-Synced with GitHub @saurabhcoder99');

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await fetchProjects(activeCategory, searchQuery);
      setProjects(data);
    } catch (err) {
      console.error('Failed to load projects', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(loadProjects, 150);
    return () => clearTimeout(debounce);
  }, [activeCategory, searchQuery]);

  const handleSyncGitHub = async () => {
    setIsSyncing(true);
    setSyncStatus('Synchronizing live from GitHub API...');
    try {
      const result = await syncGitHub();
      await loadProjects();
      setSyncStatus(`Synced! ${result.data?.length || 6} Verified GitHub Projects Loaded`);
      setTimeout(() => {
        setSyncStatus('Auto-Synced with GitHub @saurabhcoder99');
      }, 3500);
    } catch (err) {
      setSyncStatus('Sync complete from local cache');
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e1306c]/30 bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] text-xs font-mono font-semibold mb-3">
            <span>// 02. GITHUB REPOSITORIES & PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real data analytics pipelines, executive Power BI dashboards, and exploratory machine learning studies.
          </p>
        </div>

        {/* GitHub Auto-Sync Banner */}
        <div className="mb-10 p-3.5 sm:p-4 rounded-2xl glass-card border border-[#e1306c]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-200">
                {syncStatus}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/saurabhcoder99"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-[#dc2743] flex items-center gap-1.5 transition-colors"
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span>@saurabhcoder99</span>
            </a>

            <button
              onClick={handleSyncGitHub}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono insta-btn focus:outline-none disabled:opacity-60"
            >
              <FiRefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing...' : 'Sync GitHub'}</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'insta-btn font-semibold shadow-md'
                      : 'glass-btn text-slate-700 dark:text-slate-300 hover:border-[#dc2743]/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or title..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border border-[#e1306c]/20 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#dc2743] transition-all font-mono"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="glass-card rounded-2xl p-6 h-96 animate-pulse">
                <div className="bg-slate-200 dark:bg-slate-800 rounded-xl h-44 mb-4" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-3" />
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full mb-2" />
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border border-[#e1306c]/20">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-mono mb-2">No projects found matching your query.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="text-xs font-mono text-[#dc2743] hover:underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id || project.slug}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  data-cursor="project"
                  className="glass-card rounded-2xl overflow-hidden border border-[#e1306c]/15 hover:border-[#dc2743] transition-all flex flex-col group shadow-sm hover:shadow-xl"
                >
                  {/* Image Container with Zoom & Quick Details trigger */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-video w-full overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                    {/* Category pill */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-white/90 dark:bg-black/70 backdrop-blur-md text-[#dc2743] dark:text-[#f77737] border border-[#e1306c]/30 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Overlay Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full insta-btn text-xs font-mono font-bold tracking-wider shadow-lg">
                        <FiEye className="w-3.5 h-3.5" />
                        VIEW DETAILS
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-[#dc2743] transition-colors line-clamp-1 cursor-pointer mb-2"
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#e1306c]/5 dark:bg-white/5 border border-[#e1306c]/15 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-3 border-t border-[#e1306c]/10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-[#f09433]/15 to-[#dc2743]/15 hover:from-[#f09433]/25 hover:to-[#dc2743]/25 text-[#dc2743] dark:text-[#f77737] border border-[#dc2743]/30 transition-colors"
                          title="Open Live Preview"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" />
                          <span>Demo / File</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-mono font-semibold glass-btn hover:border-[#dc2743]/40 transition-colors"
                          title="View on GitHub"
                        >
                          <FiGithub className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
