
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Dynamically inject Umami analytics script from env
const umamiId = import.meta.env.VITE_UMAMI_WEBSITE_KEY || import.meta.env.UMAMI_WEBSITE_KEY;
if (umamiId) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.setAttribute("data-website-id", umamiId);
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
