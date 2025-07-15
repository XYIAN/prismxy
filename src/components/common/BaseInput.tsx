'use client';

import React from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { ThemeableProps } from '@/types';

export interface BaseInputProps extends Omit<InputTextProps, 'style' | 'variant'>, ThemeableProps {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  error,
  helperText,
  variant = 'default',
  size = 'md',
  className = '',
  theme,
  ...props
}) => {
  const getInputStyles = () => {
    const baseStyles = {
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease-in-out',
      border: error ? '2px solid #ef4444' : '2px solid rgba(255, 255, 255, 0.1)',
    };

    const sizeStyles = {
      sm: { padding: '0.5rem 0.75rem', fontSize: '0.875rem' },
      md: { padding: '0.75rem 1rem', fontSize: '1rem' },
      lg: { padding: '1rem 1.25rem', fontSize: '1.125rem' },
    };

    const variantStyles = {
      default: {
        backgroundColor: 'transparent',
        color: theme?.text || '#ffffff',
        '&:focus': {
          borderColor: theme?.primary || '#00d4ff',
          boxShadow: `0 0 0 3px ${theme?.primary || '#00d4ff'}20`,
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: theme?.text || '#ffffff',
        border: `2px solid ${theme?.primary || '#00d4ff'}`,
        '&:focus': {
          borderColor: theme?.secondary || '#0099cc',
          boxShadow: `0 0 0 3px ${theme?.secondary || '#0099cc'}20`,
        },
      },
      filled: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: theme?.text || '#ffffff',
        border: '2px solid transparent',
        '&:focus': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: theme?.primary || '#00d4ff',
        },
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return (
    <div className="base-input-wrapper">
      {label && <label className="block text-sm font-medium mb-2 opacity-90">{label}</label>}

      <InputText
        {...props}
        className={`base-input ${className} ${error ? 'p-invalid' : ''}`}
        style={getInputStyles()}
      />

      {error && (
        <div className="text-red-400 text-sm mt-1 flex items-center gap-1">
          <i className="pi pi-exclamation-triangle text-xs" />
          {error}
        </div>
      )}

      {helperText && !error && <div className="text-sm opacity-60 mt-1">{helperText}</div>}
    </div>
  );
};

export default BaseInput;
