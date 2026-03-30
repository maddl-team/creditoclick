import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { PaymentSolutions } from "@/components/home/PaymentSolutions";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyUs } from "@/components/home/WhyUs";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <PaymentSolutions />
      <Testimonials />
      <WhyUs />
      <CTA />
    </div>
  );
}
