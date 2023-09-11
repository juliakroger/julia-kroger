import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
    },
  },
  plugins: [react()],
});
