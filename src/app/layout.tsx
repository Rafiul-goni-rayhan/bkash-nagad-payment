import type { Metadata } from "next";
import { Toaster } from "sonner"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise Checkout Gateway",
  description: "Secure payment processing application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}