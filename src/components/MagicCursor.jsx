import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagicCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.closest('button') || target.closest('a') || target.closest('.project-item')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  const variants = {
    default: {
      width: 15,
      height: 15,
      backgroundColor: '#FF4D00',
      mixBlendMode: 'normal'
    },
    hover: {
      width: 60,
      height: 60,
      backgroundColor: '#FF4D00',
      mixBlendMode: 'difference',
      opacity: 0.5
    }
  };

  return (
    <motion.div
      className="magic-cursor"
      animate={cursorType}
      variants={variants}
      style={{
        left: cursorX,
        top: cursorY,
        translateX: '-50%',
        translateY: '-50%'
      }}
    >
      <style jsx>{`
        .magic-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          border-radius: 50%;
          transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
        }

        @media (max-width: 1024px) {
          .magic-cursor { display: none; }
        }
      `}</style>
    </motion.div>
  );
};

export default MagicCursor;
