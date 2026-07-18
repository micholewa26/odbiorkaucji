import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works both at <user>.github.io/odbiorkaucji/
// and at the custom domain root (odbiorkaucji.pl) without changes.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
