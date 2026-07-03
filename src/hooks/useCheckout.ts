import { useState } from 'react';
import { Product, PaymentMethodType } from '@/types';
import { toast } from 'sonner';

export function useCheckout(product: Product) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalStep, setModalStep] = useState<1 | 2>(1);

  const totalPrice = product.price * quantity;

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleOpenModal = () => {
    if (!selectedMethod) {
      toast.error('অনুগ্রহ করে একটি পেমেন্ট গেটওয়ে সিলেক্ট করুন!');
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalStep(1);
    setPhoneNumber('');
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`৳${totalPrice.toLocaleString()} পেমেন্ট সফল হয়েছে!`);
    handleCloseModal();
  };

  return {
    quantity,
    selectedMethod,
    isModalOpen,
    phoneNumber,
    modalStep,
    totalPrice,
    setPhoneNumber,
    setModalStep,
    handleIncrease,
    handleDecrease,
    handleOpenModal,
    handleCloseModal,
    handleConfirmPayment,
    setSelectedMethod,
  };
}