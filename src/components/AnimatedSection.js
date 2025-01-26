import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'fade-in' : ''}`}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 