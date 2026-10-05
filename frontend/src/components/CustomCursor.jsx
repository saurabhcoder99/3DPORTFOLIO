import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile or touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) return;

    setIsVisible(true);

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [data-cursor]');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        if (cursorType === 'project') {
          setCursorVariant('project');
        } else {
          setCursorVariant('hover');
        }
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(225, 48, 108, 0.85)',
      boxShadow: '0 0 15px rgba(220, 39, 67, 0.6)',
      transition: { type: 'spring', mass: 0.1, stiffness: 800, damping: 30 }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(225, 48, 108, 0.2)',
      borderColor: 'rgba(220, 39, 67, 0.8)',
      borderWidth: '2px',
      boxShadow: '0 0 25px rgba(225, 48, 108, 0.4)',
      transition: { type: 'spring', mass: 0.1, stiffness: 600, damping: 25 }
    },
    project: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      backgroundColor: 'rgba(240, 148, 51, 0.2)',
      borderColor: 'rgba(225, 48, 108, 0.9)',
      borderWidth: '2px',
      boxShadow: '0 0 35px rgba(225, 48, 108, 0.5)',
      transition: { type: 'spring', mass: 0.1, stiffness: 500, damping: 25 }
    }
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      opacity: 0.5,
      transition: { type: 'spring', mass: 0.3, stiffness: 200, damping: 20 }
    },
    hover: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      opacity: 0.2,
      scale: 1.4,
      transition: { type: 'spring', mass: 0.3, stiffness: 200, damping: 20 }
    },
    project: {
      x: mousePosition.x - 44,
      y: mousePosition.y - 44,
      opacity: 0.15,
      scale: 1.6,
      transition: { type: 'spring', mass: 0.3, stiffness: 200, damping: 20 }
    }
  };

  return (
    <>
      {/* Outer subtle follower ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyan-400/40 hidden lg:block"
        style={{ width: 40, height: 40 }}
        variants={ringVariants}
        animate={cursorVariant}
      />
      {/* Center cursor dot / expanded sphere */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full flex items-center justify-center text-[10px] font-mono font-semibold text-cyan-300 hidden lg:flex"
        variants={variants}
        animate={cursorVariant}
      >
        {cursorVariant === 'project' && <span>VIEW</span>}
      </motion.div>
    </>
  );
};
