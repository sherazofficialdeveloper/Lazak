import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
      secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-soft',
      accent: 'bg-accent text-white hover:bg-accent/90 shadow-soft',
      outline: 'border-2 border-primary text-primary hover:bg-primary/5',
      ghost: 'hover:bg-primary/5 text-text-main',
      icon: 'p-2 rounded-full hover:bg-muted/10',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-sm',
      md: 'px-6 py-2.5 text-base rounded-md',
      lg: 'px-8 py-3.5 text-lg rounded-lg',
      icon: 'w-10 h-10 flex items-center justify-center',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-main active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant === 'icon' ? 'icon' : variant],
          size !== 'icon' && sizes[size],
          size === 'icon' && 'rounded-full',
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
