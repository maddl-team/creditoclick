import type { ReactNode } from "react";
import { IUBENDA_COOKIE_POLICY_URL, IUBENDA_PRIVACY_POLICY_URL } from "@/config/iubenda";

export type IubendaEmbedSkin = "white" | "black";

type Props = {
  policy: "privacy" | "cookie";
  /** `white` = classi iubenda per sfondi scuri; `black` = per sfondi chiari (moduli). */
  embedSkin?: IubendaEmbedSkin;
  className?: string;
  children: ReactNode;
};

export function IubendaEmbedLink({ policy, embedSkin = "black", className = "", children }: Props) {
  const href = policy === "privacy" ? IUBENDA_PRIVACY_POLICY_URL : IUBENDA_COOKIE_POLICY_URL;
  const title = policy === "privacy" ? "Privacy Policy" : "Cookie Policy";
  const skinClass = embedSkin === "white" ? "iubenda-white" : "iubenda-black";

  return (
    <a href={href} className={`${skinClass} iubenda-noiframe iubenda-embed ${className}`.trim()} title={title}>
      {children}
    </a>
  );
}
