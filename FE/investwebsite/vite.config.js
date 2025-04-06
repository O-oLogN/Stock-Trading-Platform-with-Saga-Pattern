import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: {
      "/api": {
        target: "https://hybrid-blockchain-based-stock-tr-test.up.railway.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/users': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    },
  },
});