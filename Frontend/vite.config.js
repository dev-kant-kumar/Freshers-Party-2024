import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from other devices on the network
    port: 5173, // Port number, make sure it matches where your app is running
  },
});
