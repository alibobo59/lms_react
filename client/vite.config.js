import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module
import { fileURLToPath } from "url"; // Import this module

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Now __dirname works!
    },
  },
});
