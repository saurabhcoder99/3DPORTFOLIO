import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../utils/portfolioData';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ activeSection, onNavigate, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#fff9f6]/90 dark:bg-[#120c18]/90 backdrop-blur-xl border-b border-[#e1306c]/15 shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name with Instagram Story Avatar */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Saurabh Kumar Home"
          >
            {/* Story-ring avatar */}
            <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover object-top border border-white dark:border-[#120c18]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-[#dc2743] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider font-semibold bg-gradient-to-r from-[#dc2743] to-[#833ab4] bg-clip-text text-transparent">
                DATA ANALYST
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 dark:bg-white/[0.05] border border-[#e1306c]/15 rounded-full px-3 py-1.5 backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full shadow-[0_4px_15px_rgba(225,48,108,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-[#e1306c]/20 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-[#dc2743] transition-all focus:outline-none shadow-sm"
              aria-label="Toggle Dark and Light theme"
              title={theme === 'dark' ? 'Switch to Instagram Warm Theme' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <FiSun className="w-4 h-4 text-[#f09433]" /> : <FiMoon className="w-4 h-4 text-[#833ab4]" />}
            </button>

            {/* Quick Resume Link */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide insta-btn font-mono"
            >
              <span>RESUME</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[#e1306c]/20 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun className="w-4 h-4 text-[#f09433]" /> : <FiMoon className="w-4 h-4 text-[#833ab4]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#e1306c]/20 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-[#e1306c]/20 bg-[#fff9f6]/95 dark:bg-[#120c18]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 shadow-2xl"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f09433] to-[#dc2743] text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                </button>
              );
            })}

            <div className="pt-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl insta-btn font-semibold font-mono text-xs tracking-wider"
              >
                <span>DOWNLOAD RESUME</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
