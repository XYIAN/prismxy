'use client';

import React from 'react';
import { Button, ButtonProps } from 'primereact/button';
import { ThemeableProps } from '@/types';

export interface BaseButtonProps extends Omit<ButtonProps, 'style' | 'size'>, ThemeableProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  theme,
  disabled,
  children,
  ...props
}) => {
  const getVariantStyles = () => {
    if (!theme) return {};

    const baseStyles = {
      border: 'none',
      borderRadius: '0.5rem',
      fontWeight: 500,
      transition: 'all 0.2s ease-in-out',
    };

    const sizeStyles = {
      sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
      md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
      lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    };

    const variantStyles = {
      primary: {
        backgroundColor: theme.primary,
        color: theme.background,
        '&:hover': {
          backgroundColor: theme.secondary,
          transform: 'translateY(-1px)',
        },
      },
      secondary: {
        backgroundColor: theme.secondary,
        color: theme.background,
        '&:hover': {
          backgroundColor: theme.accent,
          transform: 'translateY(-1px)',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: theme.primary,
        border: `2px solid ${theme.primary}`,
        '&:hover': {
          backgroundColor: theme.primary,
          color: theme.background,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: theme.text,
        '&:hover': {
          backgroundColor: `${theme.text}10`,
        },
      },
      danger: {
        backgroundColor: '#ef4444',
        color: '#ffffff',
        '&:hover': {
          backgroundColor: '#dc2626',
          transform: 'translateY(-1px)',
        },
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  // Map our size to PrimeReact size
  const getPrimeReactSize = () => {
    switch (size) {
      case 'sm':
        return 'small';
      case 'lg':
        return 'large';
      default:
        return undefined;
    }
  };

  return (
    <Button
      {...props}
      className={`base-button ${className}`}
      style={getVariantStyles()}
      disabled={disabled || loading}
      loading={loading}
      size={getPrimeReactSize()}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
