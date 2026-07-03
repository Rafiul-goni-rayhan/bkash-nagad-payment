import React from 'react';
import { PaymentMethodType } from '@/types';
import Button from '../ui/button/Button';

interface PriceSummaryProps {
  totalPrice: number;
  selectedMethod: PaymentMethodType;
  onPay: () => void;
}

export default function PriceSummary({ totalPrice, selectedMethod, onPay }: PriceSummaryProps) {
  const getButtonBg = () => {
    if (selectedMethod === 'bkash') return 'var(--brand-bkash)';
    if (selectedMethod === 'nagad') return 'var(--brand-nagad)';
    return 'var(--brand-primary)';
  };

  return (
    <div className="space-y-4 pt-4 border-t border-slate-100">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--text-muted)]">মোট প্রদেয় বিল:</span>
        <span className="text-2xl font-black text-[var(--text-main)]">৳{totalPrice.toLocaleString()}</span>
      </div>
      <Button type="button" onClick={onPay} style={{ backgroundColor: getButtonBg() }} className="w-full">
        {selectedMethod ? `Pay with ${selectedMethod.toUpperCase()}` : 'পেমেন্ট নিশ্চিত করুন'}
      </Button>
    </div>
  );
}