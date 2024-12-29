import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "./src/DatePickerNP/index.ts",
      name: "DatePickerNP",
      formats: ["es", "umd"], // Build both ESM and UMD formats
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react"], // Ensure that React is treated as an external dependency
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
