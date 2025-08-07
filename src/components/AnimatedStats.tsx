import React from 'react';
import { useCountAnimation } from '../hooks/useCountAnimation';

interface StatItemProps {
  number: number;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay = 0 }) => {
  const { count, elementRef } = useCountAnimation({ 
    end: number, 
    duration: 2500,
    delay 
  });

  return (
    <div className="stat" ref={elementRef}>
      <span className="stat-number">{count.toLocaleString()}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const AnimatedStats: React.FC = () => {
  return (
    <div className="about-stats">
      <StatItem 
        number={1600} 
        label="Studenti che hanno creduto in noi" 
        delay={0}
      />
      <StatItem 
        number={30} 
        label="Eventi all'Anno" 
        delay={200}
      />
      <StatItem 
        number={25} 
        label="Membri Attivi" 
        delay={400}
      />
    </div>
  );
};

export default AnimatedStats;
