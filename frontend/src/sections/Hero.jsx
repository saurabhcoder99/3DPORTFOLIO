import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin, FiAward, FiBarChart2, FiDatabase } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { personalInfo } from '../utils/portfolioData';

const titles = [
  "Data Analyst",
  "Data Scientist",
  "Business Analyst",
  "Power BI Specialist",
  "Python & SQL Analytics Expert"
];

export const Hero = ({ onNavigate }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 35 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Instagram Warm Ambient Lighting */}
      <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-20 -right-20 w-[480px] h-[480px] bg-gradient-to-bl from-[#833ab4]/20 via-[#e1306c]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e1306c]/25 bg-white/70 dark:bg-[#1a1024]/80 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1306c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-[#f09433] to-[#dc2743]"></span>
              </span>
              <span className="text-xs font-mono font-semibold bg-gradient-to-r from-[#dc2743] to-[#833ab4] bg-clip-text text-transparent tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#833ab4] bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Animated Typewriter Headline */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="font-mono text-xl sm:text-2xl text-slate-700 dark:text-slate-200 font-bold">
                &gt; {displayedText}
                <span className="animate-pulse text-[#dc2743] font-extrabold ml-1">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider font-mono insta-btn focus:outline-none"
              >
                <span>EXPLORE PROJECTS</span>
                <FiArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Saurabh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs tracking-wider font-mono glass-btn shadow-sm hover:border-[#dc2743]/50 transition-all transform hover:-translate-y-0.5"
              >
                <FiDownload className="w-4 h-4 text-[#dc2743]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs tracking-wider font-mono border border-[#833ab4]/30 bg-purple-500/10 hover:bg-purple-500/20 text-[#833ab4] dark:text-purple-300 transition-all transform hover:-translate-y-0.5 focus:outline-none"
              >
                <FiMail className="w-4 h-4" />
                <span>LET'S TALK</span>
              </button>
            </div>

            {/* Quick Tech & Social Badges */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-400 dark:text-slate-500">CONNECT:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dc2743] transition-colors flex items-center gap-1.5"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#833ab4] transition-colors flex items-center gap-1.5"
              >
                <FiLinkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e1306c] transition-colors flex items-center gap-1.5"
                title="X (Twitter)"
              >
                <FaXTwitter className="w-4 h-4" />
                <span>X</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero: User Photo with Instagram Story Gradient Ring (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            {/* Ambient halo behind portrait */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#f09433]/30 via-[#dc2743]/25 to-[#833ab4]/30 rounded-3xl blur-2xl opacity-70 -z-10 animate-pulse-slow" />

            {/* Outer Instagram Gradient Frame */}
            <div className="relative p-1.5 rounded-[2.5rem] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_20px_60px_-15px_rgba(225,48,108,0.35)] transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Inner container */}
              <div className="relative rounded-[2.3rem] overflow-hidden bg-white dark:bg-[#1a1024] p-2">
                <img
                  src={personalInfo.photo}
                  alt="Saurabh Kumar - Data Analyst"
                  className="w-full max-w-[340px] sm:max-w-[380px] h-[440px] sm:h-[480px] object-cover object-top rounded-[1.8rem] shadow-inner"
                  loading="eager"
                />

                {/* Glass Gradient Overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 dark:bg-[#120c18]/90 backdrop-blur-md border border-[#e1306c]/20 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                        Saurabh Kumar
                      </h3>
                      <p className="text-[11px] font-mono text-[#dc2743] dark:text-[#f77737] font-semibold">
                        Data Analyst • BI • Data Science
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>OPEN TO WORK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Floating Metric Card 1: Top-Right */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-5 -right-3 sm:-right-6 glass-card px-4 py-2.5 rounded-2xl border border-[#e1306c]/30 shadow-lg flex items-center gap-3 backdrop-blur-xl"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] to-[#dc2743] text-white flex items-center justify-center shadow-sm">
                <FiBarChart2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">Power BI & DAX</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Executive Dashboards</p>
              </div>
            </motion.div>

            {/* Floating Metric Card 2: Bottom-Left */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-6 -left-3 sm:-left-6 glass-card px-4 py-2.5 rounded-2xl border border-[#833ab4]/30 shadow-lg flex items-center gap-3 backdrop-blur-xl"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#dc2743] to-[#833ab4] text-white flex items-center justify-center shadow-sm">
                <FiDatabase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">LeetCode SQL 50</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Badge of Mastery</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
