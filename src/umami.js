const UMAMI_WEBSITE_ID = "112b6d90-6119-4cbf-8ab5-423ea98977ee";

export function loadUmamiScript() {
  if (typeof window === "undefined") {
    return;
  }

  const consent = window.localStorage.getItem("avz-cookie-consent");
  if (consent !== "granted") {
    return;
  }

  const existingScript = document.querySelector('script[data-website-id="112b6d90-6119-4cbf-8ab5-423ea98977ee"]');
  if (existingScript) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.setAttribute("data-website-id", UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
}
