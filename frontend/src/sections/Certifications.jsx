import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink,
  FiCheckCircle,
  FiAward,
  FiEye,
  FiDownload,
  FiX,
  FiCalendar,
  FiMaximize2
} from 'react-icons/fi';
import { certificationsData } from '../utils/portfolioData';

const categories = [
  'All Credentials',
  'Data Analytics',
  'SQL & Databases',
  'Data Science',
  'AI & Automation',
  'Business Intelligence'
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All Credentials');

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  if (!certificationsData || certificationsData.length === 0) {
    return null;
  }

  const filteredCerts = activeCategory === 'All Credentials'
    ? certificationsData
    : certificationsData.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#f09433]/10 via-[#dc2743]/10 to-[#833ab4]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e1306c]/30 bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] text-xs font-mono font-semibold mb-4"
          >
            <FiAward className="w-3.5 h-3.5 text-[#dc2743]" />
            <span>// 05. VERIFIED CREDENTIALS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Certificates &amp; Specializations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans"
          >
            Verified industry credentials across Data Analytics, SQL database mastery, Power BI business intelligence, and Python data science.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat === 'All Credentials'
              ? certificationsData.length
              : certificationsData.filter((c) => c.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'insta-btn font-semibold shadow-md'
                    : 'glass-btn text-slate-700 dark:text-slate-300 hover:border-[#dc2743]/50'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-white text-[#dc2743] font-bold'
                      : 'bg-black/10 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative rounded-2xl border border-[#e1306c]/15 glass-card transition-all duration-300 hover:border-[#dc2743] hover:shadow-xl flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Top Glowing Gradient Accent Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#833ab4]" />

                <div className="p-6 sm:p-7">
                  {/* Thumbnail / Preview Area */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900 border border-[#e1306c]/15 cursor-pointer group/thumb"
                  >
                    <img
                      src={cert.previewImage}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full insta-btn text-xs font-mono font-medium shadow-lg">
                        <FiMaximize2 className="w-4 h-4" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>

                    {/* Category Pill Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-white/90 dark:bg-black/75 backdrop-blur-md border border-[#e1306c]/20 text-[#dc2743] dark:text-[#f77737] font-semibold">
                        {cert.category}
                      </span>
                    </div>

                    {/* PDF / Image format badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#dc2743]/15 text-[#dc2743] dark:text-[#f77737] border border-[#dc2743]/30 backdrop-blur-md">
                        {cert.isPdf ? 'OFFICIAL PDF' : 'VERIFIED PNG'}
                      </span>
                    </div>
                  </div>

                  {/* Header: Title and Issuer */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#dc2743] dark:text-[#f77737] mb-1.5 font-semibold">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span className="text-slate-500 dark:text-slate-400 inline-flex items-center gap-1 font-normal">
                        <FiCalendar className="w-3 h-3 text-slate-400" />
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-[#dc2743] transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-sans line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Credential ID badge */}
                  <div className="mb-5">
                    <span className="inline-block text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-gradient-to-r from-[#f09433]/10 to-[#dc2743]/10 px-3 py-1 rounded-lg border border-[#e1306c]/20">
                      ID: <span className="text-[#dc2743] dark:text-[#f77737] font-bold">{cert.credentialId}</span>
                    </span>
                  </div>

                  {/* Skills Validated */}
                  <div className="pt-4 border-t border-[#e1306c]/10 mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] border border-[#e1306c]/20"
                        >
                          <FiCheckCircle className="w-3 h-3 text-[#dc2743] shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="px-6 py-4 bg-[#e1306c]/5 border-t border-[#e1306c]/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-[#dc2743] transition-colors group/btn font-semibold"
                  >
                    <FiEye className="w-4 h-4 text-[#dc2743] group-hover/btn:scale-110 transition-transform" />
                    <span>Quick Preview</span>
                  </button>

                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-btn hover:border-[#dc2743]/50 text-xs font-mono transition-all"
                    title="Open original certificate file"
                  >
                    <span>Open File</span>
                    <FiExternalLink className="w-3.5 h-3.5 text-[#dc2743]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Certificate Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#160d20] border border-[#e1306c]/25 rounded-2xl shadow-[0_0_60px_rgba(225,48,108,0.25)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#e1306c]/15 bg-[#fff9f6] dark:bg-[#1a1024]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] to-[#dc2743] text-white flex items-center justify-center shadow-sm">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-1">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-btn hover:text-[#dc2743]"
                    title="Open original document in new tab"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-lg glass-btn hover:text-red-500"
                    aria-label="Close modal"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Body with Scroll */}
              <div className="p-4 sm:p-6 overflow-auto max-h-[calc(92vh-140px)] flex items-center justify-center bg-slate-50 dark:bg-black/40">
                <img
                  src={selectedCert.previewImage}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-xl border border-[#e1306c]/15"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3.5 border-t border-[#e1306c]/15 bg-[#fff9f6] dark:bg-[#1a1024] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Credential ID:</span>
                  <span className="text-[#dc2743] dark:text-[#f77737] font-bold">{selectedCert.credentialId}</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.fileUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg insta-btn font-medium text-xs shadow-sm"
                  >
                    <FiDownload className="w-3.5 h-3.5" />
                    <span>Download Original</span>
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-3 py-1.5 rounded-lg glass-btn"
                  >
                    Close (Esc)
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
