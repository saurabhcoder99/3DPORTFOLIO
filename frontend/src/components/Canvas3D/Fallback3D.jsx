import { motion } from 'framer-motion';

export const Fallback3D = () => {
  return (
    <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Ambient glowing radial backdrop */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#833ab4]/20 blur-3xl" />

      {/* Orbiting Ring 1 */}
      <div className="absolute w-80 h-80 rounded-full border border-[#dc2743]/20 animate-spin-slow pointer-events-none" />

      {/* Orbiting Ring 2 */}
      <div
        className="absolute w-64 h-64 rounded-full border border-dashed border-[#833ab4]/30 pointer-events-none"
        style={{ animation: 'spin 14s linear infinite reverse' }}
      />

      {/* 3D Holographic CSS Cube */}
      <div className="cube-wrap z-10">
        <div className="cube">
          <div className="cube-face cube-front flex items-center justify-center">
            <span className="font-mono text-xs text-[#dc2743] font-bold">&lt;DATA /&gt;</span>
          </div>
          <div className="cube-face cube-back flex items-center justify-center">
            <span className="font-mono text-xs text-[#833ab4] font-bold">&lt;ML /&gt;</span>
          </div>
          <div className="cube-face cube-right flex items-center justify-center">
            <span className="font-mono text-xs text-[#f09433] font-bold">SQL + PY</span>
          </div>
          <div className="cube-face cube-left flex items-center justify-center">
            <span className="font-mono text-xs text-[#e1306c] font-bold">POWER BI</span>
          </div>
          <div className="cube-face cube-top flex items-center justify-center">
            <span className="font-mono text-xs text-[#bc1888] font-bold">ANALYTICS</span>
          </div>
          <div className="cube-face cube-bottom flex items-center justify-center">
            <span className="font-mono text-xs text-[#fcaf45] font-bold">INSIGHTS</span>
          </div>
        </div>
      </div>

      {/* Floating status badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 glass-card px-4 py-1.5 rounded-full border border-[#e1306c]/30 flex items-center gap-2 text-xs font-mono text-[#dc2743] shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-[#dc2743] animate-ping" />
        <span>DATA INTELLIGENCE CORE</span>
      </motion.div>
    </div>
  );
};
