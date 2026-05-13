import Script from "next/script";

/**
 * Consent Mode v2 default (EU) + setter usato dal callback Iubenda.
 * Deve restare inline e minimo; eseguito prima di GTM e prima dello script Iubenda.
 */
export function ConsentModeBootstrap() {
  return (
    <Script
      id="creditoclick-consent-mode-default"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  window.__creditoclickAdUserData = false;
  window.__creditoclickSetAdConsent = function(granted) {
    window.__creditoclickAdUserData = !!granted;
    try {
      window.dispatchEvent(new CustomEvent('creditoclick_iubenda_preference', { detail: { ad_user_data_granted: !!granted } }));
    } catch (e) {}
  };
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
})();
`,
      }}
    />
  );
}
