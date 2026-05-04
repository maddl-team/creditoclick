"use client";

import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { cn } from "@/lib/utils";

type TeamMember = {
  readonly id: string;
  readonly name: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly bio: string;
};

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return `${first}${last}`.toUpperCase();
}

function TeamMemberCard({ member, accentClass }: { member: TeamMember; accentClass: string }) {
  const [imageFailed, setImageFailed] = React.useState(false);
  const initials = initialsFromName(member.name);

  return (
    <article
      className={cn(
        "group relative flex flex-col sm:flex-row gap-5 sm:gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md hover:border-slate-300/90",
      )}
    >
      <div className="relative mx-auto shrink-0 sm:mx-0">
        <div
          className={cn(
            "relative h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-offset-2 ring-offset-white transition-transform group-hover:scale-[1.02]",
            accentClass,
          )}
        >
          {!imageFailed ? (
            <Image
              src={member.imageSrc}
              alt={member.imageAlt}
              fill
              sizes="112px"
              className="object-cover"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-xl font-bold tracking-tight text-slate-600"
              aria-hidden
            >
              {initials}
            </div>
          )}
        </div>
      </div>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h3 className="text-lg font-bold text-text-primary leading-snug">{member.name}</h3>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed sm:text-base">{member.bio}</p>
      </div>
    </article>
  );
}

const ACCENT_ROTATION = [
  "ring-brand-indigo/25",
  "ring-brand-cyan/30",
  "ring-emerald-500/25",
  "ring-violet-400/30",
] as const;

export function ChiSiamoTeamSection({
  badge,
  title,
  intro,
  members,
}: {
  badge: string;
  title: string;
  intro: readonly string[];
  members: readonly TeamMember[];
}) {
  return (
    <Section className="bg-surface-subtle border-t border-slate-200/60 overflow-visible">
      <div className="space-y-10 md:space-y-12">
        <SectionIntro
          badge={<Badge variant="subtle">{badge}</Badge>}
          title={title}
          description={
            <>
              {intro.map((p) => (
                <p key={p} className="text-lg text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}
            </>
          }
          descriptionClassName="space-y-5 max-w-3xl"
        />

        <ul className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {members.map((member, i) => (
            <li key={member.id}>
              <TeamMemberCard member={member} accentClass={ACCENT_ROTATION[i % ACCENT_ROTATION.length]} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
