import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Licznik wejść (server/hit.php) — bez cookies, bez IP; tylko na produkcji.
if (/(^|\.)odbiorkaucji\.pl$/.test(window.location.hostname)) {
  const hit = new FormData();
  hit.append("p", window.location.pathname + window.location.hash);
  hit.append("r", document.referrer);
  navigator.sendBeacon(
    "https://serwer2626989.hosting-home.pl/api_odbiorkaucji/hit.php",
    hit
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
