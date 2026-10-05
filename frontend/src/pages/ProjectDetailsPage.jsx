import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle, FiAlertCircle, FiLayers } from 'react-icons/fi';
import { fetchProjectBySlug } from '../utils/api';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ProjectDetailsPage = ({ theme, toggleTheme }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      setLoading(true);
      const data = await fetchProjectBySlug(slug);
      setProject(data);
      setLoading(false);
    };
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fff9f6] dark:bg-[#120c18] text-slate-900 dark:text-white flex items-center justify-center font-mono text-sm">
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 border-2 border-[#dc2743] border-t-transparent rounded-full animate-spin" />
          <span>LOADING ANALYTICS CASE STUDY...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#fff9f6] dark:bg-[#120c18] text-slate-900 dark:text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold font-display mb-2">Project Not Found</h2>
        <p className="text-xs text-slate-500 mb-6">No project matched the identifier "{slug}".</p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold insta-btn"
        >
          RETURN TO PORTFOLIO
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff9f6] dark:bg-[#120c18] text-slate-900 dark:text-slate-100 cyber-grid transition-colors duration-300">
      <Navbar
        activeSection="projects"
        onNavigate={() => navigate('/')}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#dc2743] dark:text-[#f77737] hover:underline transition-colors mb-8 group font-semibold"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#dc2743]/15 text-[#dc2743] dark:text-[#f77737] border border-[#dc2743]/30">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#833ab4]/15 text-[#833ab4] dark:text-purple-300 border border-[#833ab4]/30">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
          {project.title}
        </h1>

        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden border border-[#e1306c]/15 aspect-video w-full mb-8 shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Actions bar */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-[#e1306c]/15">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider font-mono insta-btn shadow-md"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>LIVE REPORT / DEMO</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider font-mono glass-btn hover:border-[#dc2743]/50 transition-transform hover:-translate-y-0.5"
            >
              <FiGithub className="w-4 h-4 text-[#dc2743]" />
              <span>GITHUB REPOSITORY</span>
            </a>
          )}
        </div>

        {/* Overview & Content */}
        <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <FiLayers className="text-[#dc2743]" />
              Project Overview &amp; Architecture
            </h3>
            <p className="leading-relaxed">{project.overview || project.description}</p>
          </div>

          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem && (
                <div className="glass-card p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                    <FiAlertCircle className="w-4 h-4 text-red-500" />
                    The Business Problem
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="glass-card p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                  <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                    Analytical Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FiCheckCircle className="text-[#dc2743]" />
                Key Analytical Deliverables
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="glass-card p-3.5 rounded-xl border border-[#e1306c]/15 flex items-start gap-2.5 text-xs sm:text-sm shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f09433] to-[#dc2743] mt-1.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Technologies Employed</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-gradient-to-r from-[#f09433]/10 to-[#dc2743]/10 border border-[#e1306c]/20 text-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={() => navigate('/')} />
    </div>
  );
};
