import React from 'react';
import Input from '../ui/input/Input';
import Label from '../ui/label/Label';
import Button from '../ui/button/Button';

interface OtpStepProps {
  phoneNumber: string;
  onBack: () => void;
  onConfirm: (e: React.FormEvent) => void;
  themeColor: string;
}

export default function OtpStep({ phoneNumber, onBack, onConfirm, themeColor }: OtpStepProps) {
  return (
    <form onSubmit={onConfirm} className="space-y-4">
      <div>
        <Label>ভেরিফিকেশন কোড (OTP) দিন</Label>
        <Input type="text" placeholder="XXXXXX" maxLength={6} className="tracking-widest font-bold" required />
        <p className="text-[10px] text-[var(--text-muted)] text-center mt-1.5">
          একটি  কোড আপনার {phoneNumber} নম্বরে পাঠানো হয়েছে।
        </p>
      </div>
      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="w-1/3 bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition-all active:scale-[0.98]">
          ফিরে যান
        </button>
        <Button type="submit" style={{ backgroundColor: themeColor }} className="w-2/3 py-3">
          নিশ্চিত করুন
        </Button>
      </div>
    </form>
  );
}