/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
  },
  build: {
    outDir: '/var/www/html/g16pokeshop.com/public_html/'
  }
});

