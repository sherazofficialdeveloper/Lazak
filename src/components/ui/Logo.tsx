import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  showText = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: {
      box: 'w-8 h-8 rounded-lg text-lg',
      text: 'text-lg',
      subtext: 'text-[6px]'
    },
    md: {
      box: 'w-10 h-10 rounded-xl text-xl',
      text: 'text-xl',
      subtext: 'text-[8px]'
    },
    lg: {
      box: 'w-14 h-14 rounded-2xl text-2xl',
      text: 'text-2xl',
      subtext: 'text-[10px]'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <Link to="/" className={cn("flex items-center gap-2 group shrink-0", className)}>
      <div className={cn(
        "bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform shadow-soft",
        currentSize.box
      )}>
        <span className="text-white font-bold">L</span>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-black tracking-tighter text-secondary", currentSize.text)}>
            LAZAK
          </span>
          <span className={cn("font-bold tracking-[0.2em] text-primary uppercase", currentSize.subtext)}>
            Essentials with Care
          </span>
        </div>
      )}
    </Link>
  );
};
