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
    </>
  );
}
