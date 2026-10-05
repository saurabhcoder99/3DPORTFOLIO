import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiTrendingUp, FiBriefcase, FiAward, FiCheck } from 'react-icons/fi';
import { careerData } from '../utils/careerData';

// Map icon & styling by category with Instagram logo gradient accents
const categoryConfig = {
  'Work Experience': {
    icon: <FiBriefcase className="text-[#dc2743]" />,
    badgeClass: 'bg-[#dc2743]/10 text-[#dc2743] dark:text-[#f77737] border-[#dc2743]/30',
    nodeColor: 'border-[#dc2743] shadow-[0_0_15px_rgba(220,39,67,0.5)]',
    dotColor: 'bg-[#dc2743]',
  },
  Education: {
    icon: <FiBookOpen className="text-[#833ab4]" />,
    badgeClass: 'bg-[#833ab4]/10 text-[#833ab4] dark:text-purple-300 border-[#833ab4]/30',
    nodeColor: 'border-[#833ab4] shadow-[0_0_15px_rgba(131,58,180,0.5)]',
    dotColor: 'bg-[#833ab4]',
  },
  'Professional Learning': {
    icon: <FiTrendingUp className="text-[#f09433]" />,
    badgeClass: 'bg-[#f09433]/10 text-[#f09433] dark:text-amber-300 border-[#f09433]/30',
    nodeColor: 'border-[#f09433] shadow-[0_0_15px_rgba(240,148,51,0.5)]',
    dotColor: 'bg-[#f09433]',
  },
  Achievements: {
    icon: <FiAward className="text-[#e1306c]" />,
    badgeClass: 'bg-[#e1306c]/10 text-[#e1306c] dark:text-pink-300 border-[#e1306c]/30',
    nodeColor: 'border-[#e1306c] shadow-[0_0_15px_rgba(225,48,108,0.5)]',
    dotColor: 'bg-[#e1306c]',
  },
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e1306c]/30 bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] text-xs font-mono font-semibold mb-3">
            <span>// 04. TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">
            Career Journey & Experience
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Professional internship experience, academic milestones, and specialized focus areas in Data Analytics & Engineering.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#f09433] via-[#dc2743] to-[#833ab4] shadow-[0_0_15px_rgba(225,48,108,0.35)]" />

          <div className="space-y-12">
            {careerData.map((item, index) => {
              const isEven = index % 2 === 0;
              const config = categoryConfig[item.category] || categoryConfig.Education;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#120c18] border-2 flex items-center justify-center z-10 ${config.nodeColor}`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${config.dotColor}`} />
                  </div>

                  {/* Content Box (Left or Right on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      isEven ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right'
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-6 border border-[#e1306c]/15 hover:border-[#dc2743] transition-all shadow-sm hover:shadow-lg group">
                      
                      {/* Badge & Duration */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'justify-start' : 'md:justify-end'
                        }`}
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${config.badgeClass}`}
                        >
                          {config.icon}
                          {item.category}
                        </span>

                        {item.grade && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#f09433]/10 border border-[#f09433]/25 text-[#f09433]">
                            {item.grade}
                          </span>
                        )}

                        <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                          <FiCalendar className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-[#dc2743] transition-colors mb-1">
                        {item.title}
                      </h3>

                      {/* Institution / Subtitle */}
                      {item.institution && (
                        <h4 className="text-xs font-mono font-semibold text-[#833ab4] dark:text-purple-300 mb-3">
                          {item.institution}
                        </h4>
                      )}

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights / Bullets */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mb-4 pt-3 border-t border-[#e1306c]/10 text-left">
                          <ul className="space-y-1.5">
                            {item.highlights.map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                              >
                                <FiCheck className="w-3.5 h-3.5 text-[#dc2743] flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Focus Areas / Skills Chips */}
                      {item.skills && item.skills.length > 0 && (
                        <div>
                          <span
                            className={`text-[10px] font-mono text-[#dc2743] dark:text-[#f77737] block mb-2 uppercase tracking-wider font-semibold ${
                              isEven ? 'text-left' : 'md:text-right'
                            }`}
                          >
                            Skills & Technologies
                          </span>
                          <div
                            className={`flex flex-wrap gap-1.5 ${
                              isEven ? 'justify-start' : 'md:justify-end'
                            }`}
                          >
                            {item.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 rounded text-[10px] font-mono bg-gradient-to-r from-[#f09433]/10 via-[#dc2743]/10 to-[#833ab4]/10 border border-[#e1306c]/15 text-slate-700 dark:text-slate-300 hover:border-[#dc2743] transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
