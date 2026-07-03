import React from 'react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerBg: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function BaseModal({ isOpen, onClose, headerBg, title, subtitle, children }: BaseModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-[var(--radius-custom)] shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        <div style={{ backgroundColor: headerBg }} className="p-6 text-white text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white font-bold text-lg">✕</button>
          <h3 className="text-2xl font-black tracking-wider uppercase">{title}</h3>
          <p className="text-xs text-white/80 mt-1">{subtitle}</p>
        </div>
        <div className="p-6 bg-slate-50 flex-1">{children}</div>
      </div>
    </div>
  );
}