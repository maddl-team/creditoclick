const MADDL_LOGO_URL = "https://maddl.agency/app/uploads/2019/10/logo-maddl-footer.png";

/**
 * Firma MADDL in sub-footer con rel=nofollow (pratica SEO per credit link).
 */
export function AgencyCredit() {
  return (
    <p className="text-xs text-text-secondary text-center md:text-right">
      Web Marketing Agency:{" "}
      <a
        href="https://maddl.agency/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 font-medium text-text-primary hover:text-brand-indigo transition-colors"
      >
        MADDL Agency
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MADDL_LOGO_URL}
          alt="Logo MADDL Agency"
          width={80}
          height={30}
          className="h-[24px] w-auto"
          loading="lazy"
          decoding="async"
        />
      </a>
    </p>
  );
}
