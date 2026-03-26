import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { BackgroundLines } from "@/components/ui/BackgroundLines";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreditoClick | Finanza Intelligente",
  description: "Semplifichiamo l'accesso al credito con tecnologie intelligenti e trasparenti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-text-primary h-full`}
      >
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <BackgroundLines />
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
