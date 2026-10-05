import { motion } from 'framer-motion';
import { TbChartDots, TbChartBar, TbChartLine, TbChartInfographic } from 'react-icons/tb';
import { VscDatabase } from 'react-icons/vsc';
import { FaPython } from 'react-icons/fa';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { servicesData } from '../utils/portfolioData';

const iconLookup = {
  TbChartDots: <TbChartDots className="w-7 h-7 text-[#dc2743]" />,
  TbChartBar: <TbChartBar className="w-7 h-7 text-[#f09433]" />,
  VscDatabase: <VscDatabase className="w-7 h-7 text-[#833ab4]" />,
  FaPython: <FaPython className="w-7 h-7 text-[#3776AB]" />,
  TbChartLine: <TbChartLine className="w-7 h-7 text-[#e1306c]" />,
  TbChartInfographic: <TbChartInfographic className="w-7 h-7 text-[#bc1888]" />,
};

export const Services = ({ onNavigate }) => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e1306c]/30 bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] text-xs font-mono font-semibold mb-3">
            <span>// 06. SOLUTIONS & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">
            Services &amp; Analytical Solutions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            End-to-end analytical solutions tailored for businesses, enterprises, startups, and operational stakeholders.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const icon = iconLookup[service.iconName] || <TbChartBar className="w-7 h-7 text-[#f09433]" />;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-card rounded-2xl p-6 border border-[#e1306c]/15 hover:border-[#dc2743] transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2743]/5 rounded-full blur-2xl group-hover:bg-[#dc2743]/15 transition-all" />

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433]/10 via-[#dc2743]/10 to-[#833ab4]/10 border border-[#e1306c]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all shadow-sm">
                    {icon}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#dc2743] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-[#dc2743] dark:text-[#f77737] font-semibold mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <FiCheck className="w-3.5 h-3.5 text-[#dc2743] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consult Button */}
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold glass-btn group-hover:insta-btn group-hover:text-white transition-all shadow-sm"
                >
                  <span>REQUEST CONSULTATION</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
