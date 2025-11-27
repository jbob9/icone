import React from 'react';

export const ArrowUpRight = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5m0 0H8.25m11.25 0v11.25" />
  </svg>
);

export const Plus = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const Minus = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

export const Scribble = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 50 C 20 20, 40 80, 50 50 C 60 20, 80 80, 90 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

export const StarScribble = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
     <path d="M25 5 L28 20 L45 22 L30 30 L35 45 L25 35 L15 45 L20 30 L5 22 L22 20 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
  </svg>
);

export const SocialIcon = ({ type }: { type: 'twitter' | 'instagram' | 'linkedin' | 'dribbble' }) => {
  // Simplified placeholders for social icons
  return (
    <div className="w-8 h-8 rounded-full border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors cursor-pointer">
       <span className="text-xs uppercase font-bold">{type[0]}</span>
    </div>
  )
}