import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { LegalPreFooter } from "@/components/ui/LegalPreFooter";
import { ConsentModeBootstrap } from "@/components/analytics/ConsentModeBootstrap";
import { IubendaCookieSolution } from "@/components/analytics/IubendaCookieSolution";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { GtmRouteTracker } from "@/components/analytics/GtmRouteTracker";
import { DEFAULT_SITE_OG_IMAGE } from "@/lib/seo/siteOgImages";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CreditoClick | Prestiti Online Veloci e Sicuri",
  description: "Cessione del quinto, rinnovi e consolidamento debiti: CreditoClick ti trova la soluzione giusta in 24h. Richiedi una consulenza gratuita ora.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"],
  },
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
    images: [
      {
        url: DEFAULT_SITE_OG_IMAGE.src,
        width: DEFAULT_SITE_OG_IMAGE.width ?? 1200,
        height: DEFAULT_SITE_OG_IMAGE.height ?? 630,
        alt: DEFAULT_SITE_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreditoClick | Prestiti Online Veloci e Sicuri",
    description:
      "Cessione del quinto, rinnovi e consolidamento debiti: CreditoClick ti trova la soluzione giusta in 24h. Richiedi una consulenza gratuita ora.",
    images: [DEFAULT_SITE_OG_IMAGE.src],
  },
};

const marketingScriptsDisabled = process.env.NEXT_PUBLIC_ENABLE_MARKETING_SCRIPTS === "0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://idb.iubenda.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.iubenda.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cs.iubenda.com" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-text-primary h-full`}
      >
        <ConsentModeBootstrap />
        <IubendaCookieSolution />
        {!marketingScriptsDisabled ? (
          <>
            <GoogleTagManager />
            <Suspense fallback={null}>
              <GtmRouteTracker />
            </Suspense>
          </>
        ) : null}
        <div className="flex flex-col min-h-screen relative w-full">
          <Navbar />
          <main className="flex-1 pt-[79px]">
            {children}
          </main>
          <LegalPreFooter />
          <Footer />
        </div>
      </body>
    </html>
  );
}
