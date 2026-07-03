'use client';
import { Product } from '@/types';
import { useCheckout } from '@/hooks/useCheckout';
import ProductCard from '@/components/checkout/ProductCard';
import QuantitySelector from '@/components/checkout/QuantitySelector';
import PaymentSelector from '@/components/payment/PaymentSelector';
import PriceSummary from '@/components/checkout/PriceSummary';
import PaymentModalContainer from '@/components/modal/PaymentModalContainer';

const STATIC_PRODUCT: Product = {
  id: 101,
  name: "Premium Mechanical Keyboard",
  price: 4500,
  image: "⌨️",
};

export default function CheckoutPage() {
  const {
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
  } = useCheckout(STATIC_PRODUCT);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-10 rounded-[var(--radius-custom)] shadow-[0_20px_50px_rgba(15,23,42,0.06)] w-full max-w-md border border-slate-100/50 space-y-8">
        
        <div className="text-center">
          <h1 className="text-xl font-extrabold text-[var(--text-main)] tracking-tight">Enterprise Checkout</h1>
          <p className="text-xs text-[var(--text-muted)] mt-1">Secure Multi-Gateway Routing</p>
        </div>

        <ProductCard product={STATIC_PRODUCT} />
        
        <QuantitySelector 
          quantity={quantity} 
          onIncrease={handleIncrease} 
          onDecrease={handleDecrease} 
        />
        
        <PaymentSelector 
          selectedMethod={selectedMethod} 
          onSelectMethod={setSelectedMethod} 
        />
        
        <PriceSummary 
          totalPrice={totalPrice} 
          selectedMethod={selectedMethod} 
          onPay={handleOpenModal} 
        />

        <PaymentModalContainer
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          method={selectedMethod}
          totalPrice={totalPrice}
          modalStep={modalStep}
          setModalStep={setModalStep}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          onConfirmPayment={handleConfirmPayment}
        />

      </div>
    </div>
  );
}