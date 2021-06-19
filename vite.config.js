import {defineConfig} from "vite";
export default defineConfig({
  build: {
    polyfillDynamicImport: false,
    target: 'esnext',
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {}
      }
    }
  },
});
