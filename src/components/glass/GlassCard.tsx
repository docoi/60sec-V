import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  shimmer?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true,
  shimmer = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'glass-card',
        hover && 'hover:glass-card-hover',
        shimmer && 'shimmer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;

