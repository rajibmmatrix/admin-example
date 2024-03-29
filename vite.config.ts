import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@api": `${path.resolve(__dirname, "./src/api/api")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@components": `${path.resolve(__dirname, "./src/components")}`,
      "@hooks": `${path.resolve(__dirname, "./src/hooks")}`,
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@public": `${path.resolve(__dirname, "./public/")}`,
    },
  },
});
