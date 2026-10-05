import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPython,
  FaGitAlt,
  FaFileExcel,
  FaJava,
} from 'react-icons/fa';
import {
  SiMysql,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiPostgresql,
  SiC,
  SiScikitlearn,
} from 'react-icons/si';
import { VscCode, VscDatabase } from 'react-icons/vsc';
import { TbApi, TbChartBar, TbChartInfographic, TbChartLine, TbChartDots } from 'react-icons/tb';
import { skillsData } from '../utils/portfolioData';

// Icon Resolver map
const iconMap = {
  TbApi: <TbApi className="text-[#dc2743]" />,
  VscDatabase: <VscDatabase className="text-[#833ab4]" />,
  FaPython: <FaPython className="text-[#3776AB]" />,
  FaJava: <FaJava className="text-[#EA2D2E]" />,
  SiC: <SiC className="text-[#A8B9CC]" />,
  SiPandas: <SiPandas className="text-[#150458]" />,
  SiNumpy: <SiNumpy className="text-[#4DABCF]" />,
  SiPostgresql: <SiPostgresql className="text-[#4169E1]" />,
  SiMysql: <SiMysql className="text-[#4479A1]" />,
  TbChartBar: <TbChartBar className="text-[#f09433]" />,
  TbChartInfographic: <TbChartInfographic className="text-[#dc2743]" />,
  TbChartLine: <TbChartLine className="text-[#833ab4]" />,
  TbChartDots: <TbChartDots className="text-[#e1306c]" />,
  FaFileExcel: <FaFileExcel className="text-[#217346]" />,
  SiMicrosoftexcel: <FaFileExcel className="text-[#217346]" />,
  FaGitAlt: <FaGitAlt className="text-[#F05032]" />,
  VscCode: <VscCode className="text-[#007ACC]" />,
  SiJupyter: <SiJupyter className="text-[#F37626]" />,
  SiScikitlearn: <SiScikitlearn className="text-[#F7931E]" />,
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillsData[0].category);

  const activeCategoryData =
    skillsData.find((c) => c.category === selectedCategory) || skillsData[0];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#e1306c]/30 bg-[#e1306c]/10 text-[#dc2743] dark:text-[#f77737] text-xs font-mono font-semibold mb-3">
            <span>// 03. ANALYTICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">
            Technical & Analytical Arsenal
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Specialized proficiencies in Data Analytics, Business Intelligence, Python Data Science, SQL Querying, and Business Analysis.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {skillsData.map((cat) => {
            const isActive = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'insta-btn font-semibold shadow-md'
                    : 'glass-btn text-slate-700 dark:text-slate-300 hover:border-[#dc2743]/50'
                }`}
              >
                <span className="relative z-10">{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="text-center mb-8">
          <p className="text-xs font-mono text-[#dc2743] dark:text-[#f77737] font-semibold">
            {activeCategoryData.description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeCategoryData.skills.map((skill, index) => {
              const icon = iconMap[skill.iconName] || <TbChartBar className="text-[#f09433]" />;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -4, borderColor: '#dc2743' }}
                  className="glass-card rounded-2xl p-5 border border-[#e1306c]/15 relative overflow-hidden group transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433]/10 via-[#dc2743]/10 to-[#833ab4]/10 border border-[#e1306c]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-all shadow-sm">
                        {icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-[#dc2743] transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {skill.experience}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-[#dc2743] dark:text-[#f77737]">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Proficiency Track */}
                  <div className="w-full bg-slate-200 dark:bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5 border border-[#e1306c]/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#833ab4]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;
