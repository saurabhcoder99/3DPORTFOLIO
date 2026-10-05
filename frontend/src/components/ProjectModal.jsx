import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCheckCircle, FiLayers, FiAlertCircle } from 'react-icons/fi';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#e1306c]/20 bg-white dark:bg-[#160d20] p-6 sm:p-8 shadow-2xl z-10 text-slate-900 dark:text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full glass-btn text-slate-700 dark:text-slate-300 hover:text-[#dc2743] transition-all focus:outline-none"
            aria-label="Close project modal"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Category & Title */}
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-[#dc2743]/15 text-[#dc2743] dark:text-[#f77737] border border-[#dc2743]/30">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-[#833ab4]/15 text-[#833ab4] dark:text-purple-300 border border-[#833ab4]/30">
                {project.badge}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {project.title}
          </h2>

          {/* Project Banner Image */}
          <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#e1306c]/15 aspect-video max-h-80 w-full group shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>

          {/* Links CTA Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-[#e1306c]/15">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider font-mono insta-btn shadow-md"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>DEMO / REPORT FILE</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider font-mono glass-btn hover:border-[#dc2743]/50 transition-transform hover:-translate-y-0.5"
              >
                <FiGithub className="w-4 h-4 text-[#dc2743]" />
                <span>VIEW ON GITHUB</span>
              </a>
            )}
          </div>

          {/* Content Grid */}
          <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {/* Overview */}
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <FiLayers className="text-[#dc2743]" />
                Project Overview
              </h3>
              <p>{project.overview || project.description}</p>
            </div>

            {/* Problem & Solution Grid */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {project.problem && (
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1 flex items-center gap-2">
                      <FiAlertCircle className="w-4 h-4 text-red-500" />
                      The Business Challenge
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-2">
                      <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                      The Analytical Solution
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{project.solution}</p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="pt-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <FiCheckCircle className="text-[#dc2743]" />
                  Key Analytical Deliverables
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f09433] to-[#dc2743] mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-2">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-gradient-to-r from-[#f09433]/10 to-[#dc2743]/10 border border-[#e1306c]/20 text-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
