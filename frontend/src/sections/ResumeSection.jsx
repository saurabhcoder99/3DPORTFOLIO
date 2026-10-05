import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiFileText, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../utils/portfolioData';

export const ResumeSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative glass-card rounded-3xl p-8 sm:p-12 border border-[#e1306c]/20 overflow-hidden text-center shadow-lg"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#f09433]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#833ab4]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#833ab4] text-white mb-6 shadow-md">
            <FiFileText className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Looking for a Data Analyst or Business Intelligence Specialist?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Download my complete curriculum vitae detailing academic achievements, commercial internship experience, Power BI dashboards, and Python machine learning projects.
          </p>

          {/* Quick highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-700 dark:text-slate-300 mb-8 font-semibold">
            <span className="flex items-center gap-1.5">
              <FiCheckCircle className="text-[#dc2743]" /> B.Tech Information Technology
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiCheckCircle className="text-[#dc2743]" /> Data Analytics &amp; Science
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FiCheckCircle className="text-[#dc2743]" /> LeetCode SQL 50 Certified
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download="Saurabh_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider font-mono insta-btn shadow-md"
            >
              <FiDownload className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider font-mono glass-btn hover:border-[#dc2743]/50 transition-all shadow-sm"
            >
              <FiExternalLink className="w-4 h-4 text-[#dc2743]" />
              <span>VIEW RESUME</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
