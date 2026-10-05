import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiCompass } from 'react-icons/fi';
import { Fallback3D } from '../components/Canvas3D/Fallback3D';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden cyber-grid">
      {/* Background ambient lighting */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 3D Animated Core */}
      <div className="scale-75 sm:scale-90 mb-4">
        <Fallback3D />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 max-w-lg"
      >
        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-2">
          ERROR CODE // 404
        </span>

        <h1 className="text-6xl sm:text-8xl font-display font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <p className="text-lg sm:text-xl font-semibold text-white mb-2">
          Looks like you entered the wrong dimension.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
          The requested coordinate does not exist in this sector of cyberspace. Return to the main command deck to continue exploring.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all transform hover:-translate-y-0.5"
          >
            <FiHome className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
