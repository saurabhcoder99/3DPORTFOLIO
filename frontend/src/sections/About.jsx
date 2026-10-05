import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDatabase, FiAward, FiTarget, FiHeart, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';
import { personalInfo, stats } from '../utils/portfolioData';

// Animated CountUp Number Component
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // 1.8s
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#833ab4] bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e1306c]/30 bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] text-xs font-mono font-semibold mb-3">
            <span>// 01. ABOUT SAURABH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">
            About Me
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A fusion of statistical reasoning, predictive machine learning, and executive business analytics.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#dc2743]/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-1 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-16 h-16 rounded-xl object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                  Data Analyst & Business Intelligence Specialist
                </h3>
                <p className="text-xs font-mono text-[#dc2743] dark:text-[#f77737] font-semibold">
                  Rungta College of Engineering & Technology (B.Tech IT, 2023–2027)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Strengths Chips */}
            <div className="mt-8 pt-6 border-t border-[#e1306c]/15">
              <span className="text-xs font-mono text-[#dc2743] dark:text-[#f77737] block mb-3 uppercase tracking-wider font-bold">
                Core Analytics Strengths
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Analytics',
                  'Power BI Dashboards',
                  'Python EDA',
                  'SQL Optimization',
                  'Business Intelligence',
                  'Predictive Modeling',
                  'Data Storytelling',
                  'KPI Formulation',
                  'DAX Measures'
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-gradient-to-r from-[#f09433]/10 via-[#dc2743]/10 to-[#833ab4]/10 border border-[#e1306c]/20 text-slate-800 dark:text-slate-200 hover:border-[#dc2743] transition-colors"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Pillars (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-5 border border-[#e1306c]/20 hover:border-[#dc2743] transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-tr from-[#f09433] to-[#dc2743] text-white">
                  <FiAward className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">Education & Foundation</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Pursuing B.Tech in Information Technology at Rungta College of Engineering and Technology (2023 – 2027). Building strong mastery in databases, data structures, SQL analytics, Python scientific programming, and business intelligence.
              </p>
            </motion.div>

            {/* Career Goal Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-5 border border-[#833ab4]/20 hover:border-[#833ab4] transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-tr from-[#dc2743] to-[#833ab4] text-white">
                  <FiTarget className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">Career Goal & Vision</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated to transforming complex organizational datasets into strategic growth vectors. Aiming to solve high-impact analytics problems as a Data Analyst, Data Scientist, or Business Intelligence specialist.
              </p>
            </motion.div>

            {/* Passion & Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-5 border border-[#e1306c]/20 hover:border-[#e1306c] transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-tr from-[#e1306c] to-[#bc1888] text-white">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-base">Interests & Curiosity</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Exploring financial market volatility, customer retention algorithms, automated ETL data pipelines, predictive statistical modeling, and interactive Power BI report storytelling.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Dynamic Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center border border-[#e1306c]/15 relative overflow-hidden group hover:border-[#dc2743]/50 transition-all shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#dc2743]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-2 uppercase tracking-wider font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
