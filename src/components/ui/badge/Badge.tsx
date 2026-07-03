import React from 'react';

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
      Live Mode
    </span>
  );
}