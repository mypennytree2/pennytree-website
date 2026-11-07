import { useEffect } from "react";
import logo from "@/assets/logo.png";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.pennysafe.pennytree&pcampaignid=web_share";
const APP_STORE_URL =
  "https://apps.apple.com/ng/app/pennytree/id1602953102";

const Download = () => {
  useEffect(() => {
    const ua = navigator.userAgent;

    if (/android/i.test(ua)) {
      window.location.replace(PLAY_STORE_URL);
    } else if (/iphone|ipad|ipod/i.test(ua)) {
      window.location.replace(APP_STORE_URL);
    }
    // Desktop users stay on the page and see both badges
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 gap-6">
      <img src={logo} alt="PennyTree Technologies" className="h-12 object-contain" />

      <h1 className="text-2xl font-semibold text-foreground text-center">
        Download PennyTree Technologies
      </h1>
      <p className="text-muted-foreground text-center max-w-sm">
        Save, invest, and manage your money — right from your phone.
      </p>

      <div className="flex flex-row items-center gap-4 mt-2">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-12 w-auto"
          />
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-12 w-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Download;
