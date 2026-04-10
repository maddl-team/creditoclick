import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreditoClick | Prestiti Online Veloci e Sicuri",
  description: "Cessione del quinto, rinnovi e consolidamento debiti: CreditoClick ti trova la soluzione giusta in 24h. Richiedi una consulenza gratuita ora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-text-primary h-full`}
      >
        <div className="flex flex-col min-h-screen relative w-full">
          <Navbar />
          <main className="flex-1 pt-[79px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
