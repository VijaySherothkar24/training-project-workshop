import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React 19 features
      jsxImportSource: "react",
      // Enable Fast Refresh
      fastRefresh: true,
    }),
    tailwindcss(),
  ],
  // Optimize for React 19
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  // Ensure proper module resolution
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
