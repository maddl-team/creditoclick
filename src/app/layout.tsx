import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { LegalPreFooter } from "@/components/ui/LegalPreFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CreditoClick | Prestiti Online Veloci e Sicuri",
  description: "Cessione del quinto, rinnovi e consolidamento debiti: CreditoClick ti trova la soluzione giusta in 24h. Richiedi una consulenza gratuita ora.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "CreditoClick",
    title: "CreditoClick | Prestiti Online Veloci e Sicuri",
    description:
      "Cessione del quinto, rinnovi e consolidamento debiti: CreditoClick ti trova la soluzione giusta in 24h. Richiedi una consulenza gratuita ora.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreditoClick | Prestiti Online Veloci e Sicuri",
    description:
      "Cessione del quinto, rinnovi e consolidamento debiti: CreditoClick ti trova la soluzione giusta in 24h. Richiedi una consulenza gratuita ora.",
  },
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
          <LegalPreFooter />
          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </body>
    </html>
  );
}
