import React from 'react';

interface PaymentOptionButtonProps {
  name: string;
  isActive: boolean;
  brandColor: string;
  onClick: () => void;
}

export default function PaymentOptionButton({ name, isActive, brandColor, onClick }: PaymentOptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        borderColor: isActive ? brandColor : '#e2e8f0',
        backgroundColor: isActive ? `color-mix(in srgb, ${brandColor} 10%, transparent)` : '#ffffff',
        color: isActive ? brandColor : 'var(--text-muted)'
      }}
      className="p-5 rounded-[var(--radius-custom)] border-2 flex flex-col items-center justify-center gap-1 font-extrabold transition-all active:scale-95 shadow-sm"
    >
      <span className="text-xl tracking-tight">{name}</span>
    </button>
  );
}