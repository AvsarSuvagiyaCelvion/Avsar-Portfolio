import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.35 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile or has touch capabilities
    const checkDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Find element with data-cursor attribute up the tree
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    const handleFirstMove = () => {
      setIsVisible(true);
      window.removeEventListener('mousemove', handleFirstMove);
    };
    window.addEventListener('mousemove', handleFirstMove);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousemove', handleFirstMove);
    };
  }, [cursorX, cursorY]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Center Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
      />
      {/* Outer Follower */}
      <motion.div
        className={`custom-cursor-follower ${cursorType}`}
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={{
          scale: cursorType === 'default' ? 1 : cursorType === 'view' ? 2.2 : 1.8,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </motion.div>
    </>
  );
}
