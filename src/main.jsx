
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Dynamically import and load Umami script after app mounts
import("./umami.js").then(mod => {
  if (mod && typeof mod.loadUmamiScript === "function") {
    setTimeout(() => mod.loadUmamiScript(), 0);
  }
});
