import React from 'react';

import BaseModal from './BaseModal';
import PhoneStep from './PhoneStep';
import OtpStep from './OtpStep';
import { toast } from 'sonner'; 
import { PaymentMethodType } from '@/types';

interface PaymentModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  method: PaymentMethodType;
  totalPrice: number;
  modalStep: 1 | 2;
  setModalStep: (step: 1 | 2) => void;
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
  onConfirmPayment: (e: React.FormEvent) => void;
}

export default function PaymentModalContainer({
  isOpen,
  onClose,
  method,
  totalPrice,
  modalStep,
  setModalStep,
  phoneNumber,
  setPhoneNumber,
  onConfirmPayment,
}: PaymentModalContainerProps) {
  if (!method) return null;

  const themeColor = method === 'bkash' ? 'var(--brand-bkash)' : 'var(--brand-nagad)';

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
   if (phoneNumber.length === 11) {
      setModalStep(2);
    } else {
      toast.error('সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন!', {
        description: 'মোবাইল নম্বরের ফরম্যাটটি আবার চেক করুন।',
      });
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      headerBg={themeColor}
      title={`${method} Checkout`}
      subtitle={`Amount: ৳${totalPrice.toLocaleString()}`}
    >
      {modalStep === 1 ? (
        <PhoneStep
          method={method}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          onNext={handleNextStep}
          themeColor={themeColor}
        />
      ) : (
        <OtpStep
          phoneNumber={phoneNumber}
          onBack={() => setModalStep(1)}
          onConfirm={onConfirmPayment}
          themeColor={themeColor}
        />
      )}
    </BaseModal>
  );
}