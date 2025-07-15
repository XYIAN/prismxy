'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const EasterEgg: React.FC = () => {
  const { currentTheme } = useTheme();
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const createSparkle = (x: number, y: number): Sparkle => ({
    id: Date.now() + Math.random(),
    x,
    y,
    size: Math.random() * 8 + 4,
    color: [currentTheme.primary, currentTheme.secondary, currentTheme.accent][
      Math.floor(Math.random() * 3)
    ],
    delay: Math.random() * 500,
  });

  const handleClick = (e: React.MouseEvent) => {
    const now = Date.now();
    const timeDiff = now - lastClickTime;

    if (timeDiff < 100) {
      // Rapid clicking detected
      setClickCount(prev => prev + 1);

      if (clickCount >= 5) {
        // Create sparkle burst
        const newSparkles = Array.from({ length: 10 }, () => createSparkle(e.clientX, e.clientY));
        setSparkles(prev => [...prev, ...newSparkles]);
        setClickCount(0);
      }
    } else {
      setClickCount(1);
    }

    setLastClickTime(now);

    // Create single sparkle
    const sparkle = createSparkle(e.clientX, e.clientY);
    setSparkles(prev => [...prev, sparkle]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => prev.filter(sparkle => Date.now() - sparkle.id < 2000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50" onClick={handleClick}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-ping"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            borderRadius: '50%',
            animationDelay: `${sparkle.delay}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default EasterEgg;
