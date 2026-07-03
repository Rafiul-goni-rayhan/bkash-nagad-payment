import React from 'react';
import Label from '../ui/label/Label';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[var(--radius-custom)]">
      <Label>পরিমাণ (Quantity)</Label>
      <div className="flex items-center gap-3 border border-slate-200 rounded-xl p-1 bg-white shadow-sm">
        <button type="button" onClick={onDecrease} disabled={quantity <= 1} className="w-8 h-8 flex items-center justify-center bg-slate-50 hover:bg-slate-100 disabled:opacity-40 text-[var(--text-main)] rounded-lg font-black transition-all active:scale-95">-</button>
        <span className="w-8 text-center text-sm font-bold text-[var(--text-main)] select-none">{quantity}</span>
        <button type="button" onClick={onIncrease} className="w-8 h-8 flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-[var(--text-main)] rounded-lg font-black transition-all active:scale-95">+</button>
      </div>
    </div>
  );
}