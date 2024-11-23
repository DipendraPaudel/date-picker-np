import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/DatePickerNP/index.tsx",
      name: "DatePickerNP",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react"], // Ensure that React is treated as an external dependency
      output: {
        globals: {
          react: "React",
        },
        assetFileNames: "[name][extname]", // Ensure CSS is output correctly
      },
    },
    cssCodeSplit: true, // This ensures CSS is bundled separately
  },
});
