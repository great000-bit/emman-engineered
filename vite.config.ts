import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-ui": [
            "lucide-react",
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
