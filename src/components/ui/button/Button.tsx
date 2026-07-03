import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Button({ children, className = '', style, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={style}
      className={`text-white font-bold py-4 px-4 rounded-[var(--radius-custom)] transition-all shadow-md active:scale-[0.99] text-center hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      {children}
    </button>
  );
}