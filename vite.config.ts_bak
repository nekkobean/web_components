/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { peerDependencies } from "./package.json";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: [
        "src/**/*.stories.ts",
        "src/**/*.stories.tsx",
        "src/**/*.test.ts",
      ],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@eloisallena/web_components",
      fileName: (format) => `web-components.${format}.ts`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          next: "Next",
        },
      },
    },
    copyPublicDir: false,
    emptyOutDir: true,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.resolve(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
