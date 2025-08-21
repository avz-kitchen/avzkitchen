// Dynamically inject Umami analytics script from env after app starts
export function loadUmamiScript() {
  const umamiId = import.meta.env.UMAMI_WEBSITE_KEY;
  if (umamiId) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://cloud.umami.is/script.js";
    script.setAttribute("data-website-id", umamiId);
    document.head.appendChild(script);
  }
}
