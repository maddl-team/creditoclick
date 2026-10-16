import { Footer } from "@/components/ui/Footer";
import { LegalPreFooter } from "@/components/ui/LegalPreFooter";
import { Navbar } from "@/components/ui/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full relative flex-col">
      <Navbar />
      <main className="flex-1 pt-[var(--site-header-height,7.5rem)]">{children}</main>
      <LegalPreFooter />
      <Footer />
    </div>
  );
}
