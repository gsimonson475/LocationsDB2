import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  root: "UI",
  resolve: {
    alias: {
      "@styles": fileURLToPath(new URL("./UI/src/styles", import.meta.url)),
      "@components": fileURLToPath(new URL("./UI/src/components", import.meta.url))
    }
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  }
});
