'use client';

import { useEffect, useRef } from 'react';
import { PrismParticle, AnimationConfig } from '@/types';

export const usePrismAnimation = (particles: PrismParticle[], config: AnimationConfig) => {
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const animate = () => {
      // Simple animation logic for now
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, config]);

  return animationRef.current;
};
