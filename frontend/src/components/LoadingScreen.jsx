import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onFinish, 500);
          }, 250);
          return 100;
        }
        // Organic progress curve
        const step = Math.floor(Math.random() * 16) + 8;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fff8f6] dark:bg-[#120c18] text-slate-900 dark:text-white"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/15 to-[#833ab4]/20 rounded-full blur-3xl pointer-events-none -translate-y-12" />

          {/* Logo Story Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex items-center justify-center mb-6"
          >
            <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_10px_35px_rgba(225,48,108,0.35)] flex items-center justify-center">
              <img
                src="/images/saurabh_profile.jpg"
                alt="Saurabh Kumar"
                className="w-full h-full rounded-full object-cover object-top border-2 border-white dark:border-[#120c18]"
              />
            </div>
          </motion.div>

          {/* Developer Identity */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-center mb-6"
          >
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Saurabh Kumar
            </h1>
            <p className="text-xs font-mono font-semibold tracking-widest uppercase mt-1 bg-gradient-to-r from-[#dc2743] to-[#833ab4] bg-clip-text text-transparent">
              Data Analyst • Data Science • Business Analyst
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-60 h-2 bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-[#e1306c]/20 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#833ab4] rounded-full shadow-sm"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>

          {/* Progress percentage text */}
          <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
            <span>LOADING PORTFOLIO</span>
            <span className="text-[#dc2743] font-bold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
