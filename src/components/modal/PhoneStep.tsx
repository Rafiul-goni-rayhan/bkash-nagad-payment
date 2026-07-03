import React from 'react';
import Input from '../ui/input/Input';
import Label from '../ui/label/Label';
import Button from '../ui/button/Button';

interface PhoneStepProps {
  method: string;
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
  onNext: (e: React.FormEvent) => void;
  themeColor: string;
}

export default function PhoneStep({ method, phoneNumber, setPhoneNumber, onNext, themeColor }: PhoneStepProps) {
  return (
    <form onSubmit={onNext} className="space-y-4">
      <div>
        <Label>আপনার {method.toUpperCase()} অ্যাকাউন্ট নম্বর</Label>
        <Input
          type="tel"
          placeholder="e.g. 017XXXXXXXX"
          maxLength={11}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
          style={{ borderColor: phoneNumber.length === 11 ? themeColor : '' }}
        />
      </div>
      <Button type="submit" style={{ backgroundColor: themeColor }} className="w-full">
        পরবর্তী ধাপ
      </Button>
    </form>
  );
}