import React from 'react';

export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
      {children}
    </label>
  );
}