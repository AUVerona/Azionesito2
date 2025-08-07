import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
}

export const useCountAnimation = ({ 
  start = 0, 
  end, 
  duration = 2000,
  delay = 0 
}: UseCountAnimationOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;
      const totalDuration = duration;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, start, end, duration, delay]);

  return { count, elementRef };
};
