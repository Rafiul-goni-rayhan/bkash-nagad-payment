// প্রোডাক্ট অবজেক্টের এন্টারপ্রাইজ টাইপ স্ট্রাকচার
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// পেমেন্ট মেথডের জন্য টাইপ (বিকাশ, নগদ অথবা খালি)
export type PaymentMethodType = 'bkash' | 'nagad' | null;