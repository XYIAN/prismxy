'use client';

import React from 'react';
import { Card, CardProps } from 'primereact/card';
import { ThemeableProps } from '@/types';

export interface BaseCardProps extends Omit<CardProps, 'style'>, ThemeableProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const BaseCard: React.FC<BaseCardProps> = ({
  variant = 'default',
  padding = 'md',
  className = '',
  theme,
  children,
  ...props
}) => {
  const getVariantStyles = () => {
    const baseStyles = {
      borderRadius: '0.75rem',
      transition: 'all 0.2s ease-in-out',
    };

    const paddingStyles = {
      none: { padding: '0' },
      sm: { padding: '1rem' },
      md: { padding: '1.5rem' },
      lg: { padding: '2rem' },
    };

    const variantStyles = {
      default: {
        backgroundColor: theme?.surface || '#1a1a1a',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      elevated: {
        backgroundColor: theme?.surface || '#1a1a1a',
        border: 'none',
        boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.3)',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: `2px solid ${theme?.primary || '#00d4ff'}`,
        boxShadow: 'none',
      },
      glass: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    };

    return {
      ...baseStyles,
      ...paddingStyles[padding],
      ...variantStyles[variant],
    };
  };

  return (
    <Card {...props} className={`base-card ${className}`} style={getVariantStyles()}>
      {children}
    </Card>
  );
};

export default BaseCard;
