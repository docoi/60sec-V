import React from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'glass' | 'solid' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className,
  variant = 'glass',
  size = 'md',
  ...props
}) => {
  const baseClasses = 'font-medium transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    glass: 'glass-button',
    solid: 'glass-button-solid',
    ghost: 'text-white hover:bg-white/10 border border-white/20',
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;

