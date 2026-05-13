import Script from "next/script";
import { IUBENDA_COOKIE_POLICY_ID, IUBENDA_SITE_ID } from "@/config/iubenda";

/**
 * Cookie Solution Iubenda + Google Consent Mode.
 * ID da `src/config/iubenda.ts`.
 */
export function IubendaCookieSolution() {
  const siteId = IUBENDA_SITE_ID;
  const cookiePolicyId = IUBENDA_COOKIE_POLICY_ID;

  const base = {
    cookiePolicyId,
    siteId,
    lang: "it",
    googleConsentMode: true,
    perPurposeConsent: true,
    floatingPreferencesButtonDisplay: "bottom-right" as const,
    banner: {
      position: "float-bottom-center" as const,
      acceptButtonCaptionColor: "#fff",
      acceptButtonColor: "#0092A9",
      acceptButtonDisplay: true,
      backgroundColor: "#FFFFFF",
      customizeButtonCaptionColor: "#000000",
      customizeButtonColor: "#fff",
      rejectButtonCaptionColor: "#000000",
      rejectButtonColor: "#0092A9",
      textColor: "#000000",
      closeButtonDisplay: false,
      customizeButtonDisplay: true,
      explicitWithdrawal: true,
      linksColor: "#000000",
      listPurposes: true,
      rejectButtonDisplay: true,
      showTitle: false,
    },
  };

  const init = `
var _iub = _iub || [];
_iub.csConfiguration = ${JSON.stringify(base)};
_iub.csConfiguration.callback = {
  onPreferenceExpressedOrNotNeeded: function(preference) {
    var ok = !!(preference && preference.googleConsentMode && preference.googleConsentMode.ad_user_data === "granted");
    if (typeof window.__creditoclickSetAdConsent === "function") {
      window.__creditoclickSetAdConsent(ok);
    }
  }
};
`;

  return (
    <>
      <Script
        id="iubenda-cs-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: init }}
      />
      <Script
        id="iubenda-cs-loader"
        src="https://cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="beforeInteractive"
        charSet="UTF-8"
      />
    </>
  );
}
