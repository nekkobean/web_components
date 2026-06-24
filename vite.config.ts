/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      include: ["src/index.ts", "src/component", "src/declaration.d.ts"],
      insertTypesEntry: true,
      exclude: [
        "src/app/**",
        "src/**/*.stories.ts",
        "src/**/*.stories.tsx",
        "src/**/*.test.ts",
        "src/**/*.test.tsx",
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "@eloisallena/web_components",
      fileName: (format) => (format === "es" ? "index.js" : `index.cjs`),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime","react/jsx-dev-runtime", "next"],

      
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      ignoreDynamicRequires: false,
    },
    copyPublicDir: false,
    emptyOutDir: true,
  },
});4