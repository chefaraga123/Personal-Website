// src/components/CookieConsent.jsx
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    const prefs = localStorage.getItem("cookiePrefs");
    if (!prefs) setShowBanner(true);
  }, []);

  const updateConsent = (prefs) => {
    localStorage.setItem("cookiePrefs", JSON.stringify(prefs));
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "consent_updated" });
    setShowBanner(false);
    setShowPrefs(false);
  };

  return showBanner ? (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#fff", padding: "1em", zIndex: 9999 }}>
      <p>We use cookies for analytics and marketing. Choose your preferences:</p>
      <button onClick={() => updateConsent({ analytics: true, marketing: true })}>Accept All</button>
      <button onClick={() => updateConsent({ analytics: false, marketing: false })}>Reject All</button>
      <button onClick={() => setShowPrefs(true)}>Customize</button>

      {showPrefs && (
        <div style={{ marginTop: "1em" }}>
          <label>
            <input type="checkbox" id="analyticsConsent" defaultChecked /> Analytics
          </label>
          <br />
          <label>
            <input type="checkbox" id="marketingConsent" /> Marketing
          </label>
          <br />
          <button
            onClick={() => {
              const analytics = document.getElementById("analyticsConsent").checked;
              const marketing = document.getElementById("marketingConsent").checked;
              updateConsent({ analytics, marketing });
            }}
          >
            Save Preferences
          </button>
        </div>
      )}
    </div>
  ) : null;
};

export default CookieConsent;
