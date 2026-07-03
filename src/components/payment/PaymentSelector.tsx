import React from 'react';
// import { PaymentMethodType } from '../../types/index';
import { PaymentMethodType } from '../../types/index';
import PaymentOptionButton from './PaymentOptionButton';
import Label from '../ui/label/Label';

interface PaymentSelectorProps {
  selectedMethod: PaymentMethodType;
  onSelectMethod: (method: PaymentMethodType) => void;
}

export default function PaymentSelector({ selectedMethod, onSelectMethod }: PaymentSelectorProps) {
  return (
    <div className="space-y-3">
      <Label>পেমেন্ট মেথড সিলেক্ট করুন</Label>
      <div className="grid grid-cols-2 gap-4">
        <PaymentOptionButton
          name="bKash"
          isActive={selectedMethod === 'bkash'}
          brandColor="var(--brand-bkash)"
          onClick={() => onSelectMethod(selectedMethod === 'bkash' ? null : 'bkash')}
        />
        <PaymentOptionButton
          name="Nagad"
          isActive={selectedMethod === 'nagad'}
          brandColor="var(--brand-nagad)"
          onClick={() => onSelectMethod(selectedMethod === 'nagad' ? null : 'nagad')}
        />
      </div>
    </div>
  );
}