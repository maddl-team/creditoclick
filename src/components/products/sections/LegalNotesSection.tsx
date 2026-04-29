"use client";

import * as React from "react";

interface LegalFeature {
  title: string;
  description: string;
}

interface LegalNotesSectionProps {
  badge: string;
  title: string;
  intro: string;
  features: readonly LegalFeature[];
  featureIcons: readonly React.ElementType[];
  sectionClassName?: string;
}

export function LegalNotesSection({
  badge,
  title,
  intro,
  features,
  featureIcons,
  sectionClassName = "bg-slate-900 text-white border-t border-white/10",
}: LegalNotesSectionProps) {
  void badge;
  void title;
  void intro;
  void features;
  void featureIcons;
  void sectionClassName;
  return null;
}
