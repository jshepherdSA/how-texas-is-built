'use client';

// Footer control that reopens the consent banner so a visitor can change their
// choice. Dispatches an event CookieConsent listens for; styled to match the
// inline footer-copy links.
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-cookie-settings"
      onClick={() => {
        try {
          window.dispatchEvent(new Event('htib-open-cookie-settings'));
        } catch {
          // no-op
        }
      }}
    >
      Cookie Settings
    </button>
  );
}
