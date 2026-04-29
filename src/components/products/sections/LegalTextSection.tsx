"use client";

interface LegalTextSectionProps {
  badge: string;
  title: string;
  paragraphs: readonly string[];
  sectionClassName?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export function LegalTextSection({
  badge,
  title,
  paragraphs,
  sectionClassName = "bg-slate-900 text-white border-t border-white/10",
  image,
}: LegalTextSectionProps) {
  void badge;
  void title;
  void paragraphs;
  void sectionClassName;
  void image;
  return null;
}
