import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Products } from "@/components/home/Products";
import { Categories } from "@/components/home/Categories";
import { Solutions } from "@/components/home/Solutions";
import { CalcCTA } from "@/components/home/CalcCTA";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { Transparency } from "@/components/home/Transparency";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creditoclick.it";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "CreditoClick",
    url: siteUrl,
    logo: `${siteUrl}/images/creditoclick_logo.png`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: "CreditoClick",
    inLanguage: "it-IT",
    publisher: { "@id": `${siteUrl}#organization` },
  };

  return (
    <>
      <Hero />
      <TrustBar />
      <Products />
      <Categories />
      <Solutions />
      <CalcCTA />
      <Process />
      <Testimonials />
      <Transparency />
      <FAQ />
      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}
