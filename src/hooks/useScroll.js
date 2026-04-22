
import { useState, useEffect, useCallback } from 'react';

// Throttle function using requestAnimationFrame for smooth scroll performance
const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      requestAnimationFrame(() => inThrottle = false);
    }
  };
};

export const useScroll = (threshold = 400) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      setShowScrollTop(window.scrollY > threshold);
    }, 16), // ~60fps
    [threshold]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { showScrollTop, scrollToTop };
};
