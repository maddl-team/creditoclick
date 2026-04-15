import { Metadata } from "next";
import { DelegaDiPagamentoPageContent } from "@/components/products/DelegaDiPagamentoPageContent";
import { DDP_META } from "@/content/delegaDiPagamento";

export const metadata: Metadata = {
  title: DDP_META.title,
  description: DDP_META.description,
};

export default function DelegaDiPagamentoPage() {
  return <DelegaDiPagamentoPageContent />;
}
