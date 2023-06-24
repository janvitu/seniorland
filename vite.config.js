import { resolve } from "path";
import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";

const mode = process.env.NODE_ENV;
const dev = mode !== "production";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        pobyt: resolve(__dirname, "src/pobyt/index.html"),
        lokalita: resolve(__dirname, "src/lokalita/index.html"),
        areal: resolve(__dirname, "src/areal/index.html"),
        aktivity: resolve(__dirname, "src/aktivity/index.html"),
        lekarskaPece: resolve(__dirname, "src/zdravotni-pece/index.html"),
        kontakt: resolve(__dirname, "src/kontakt/index.html"),
      },
    },
  },
  plugins: dev ? [] : [minifyHtml()],
});

process.env.TAILWIND_MODE = dev ? "watch" : "build";
