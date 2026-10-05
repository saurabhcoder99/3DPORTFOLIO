import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { personalInfo } from '../utils/portfolioData';

export const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#fff1f3] dark:bg-[#0c0812] border-t border-[#e1306c]/15 text-slate-500 dark:text-slate-400 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-gradient-to-r from-[#f09433]/15 to-[#833ab4]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-sm">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
            Transforming business decisions through Data Analytics, Business Intelligence &amp; Machine Learning.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold font-mono">
          {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'services', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className="capitalize text-slate-600 dark:text-slate-400 hover:text-[#dc2743] dark:hover:text-[#f77737] transition-colors focus:outline-none"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-btn text-slate-700 dark:text-slate-300 hover:text-[#dc2743] shadow-sm transition-all"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-btn text-slate-700 dark:text-slate-300 hover:text-[#833ab4] shadow-sm transition-all"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-btn text-slate-700 dark:text-slate-300 hover:text-[#e1306c] shadow-sm transition-all"
            aria-label="X (Twitter) Profile"
            title="X (Twitter)"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.email}
            className="p-2.5 rounded-full glass-btn text-slate-700 dark:text-slate-300 hover:text-[#f09433] shadow-sm transition-all"
            aria-label="Email Me"
          >
            <FiMail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full insta-btn shadow-sm ml-2"
            aria-label="Back to top"
            title="Scroll to Top"
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="mt-8 pt-6 border-t border-[#e1306c]/10 text-center text-xs text-slate-500 font-mono">
        © 2026 Saurabh Kumar. All rights reserved. Data Analyst • Data Science • Business Analyst.
      </div>
    </footer>
  );
};
