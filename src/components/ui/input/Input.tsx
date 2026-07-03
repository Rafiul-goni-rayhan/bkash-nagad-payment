import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full p-3 border-2 border-slate-200 rounded-xl bg-white focus:outline-none text-center font-semibold text-lg tracking-wide transition-all focus:border-slate-400 ${className}`}
    />
  );
}