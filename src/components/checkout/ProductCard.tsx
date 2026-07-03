import React from 'react';

import Badge from '@/components/ui/badge/Badge';
import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-[var(--radius-custom)] shadow-sm">
      <div className="text-4xl bg-white p-3 rounded-xl shadow-inner select-none">{product.image}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-sm text-[var(--text-main)] tracking-tight">{product.name}</h3>
          <Badge>New</Badge>
        </div>
        <p className="text-[var(--text-muted)] text-xs mt-0.5">৳{product.price.toLocaleString()} / piece</p>
      </div>
    </div>
  );
}