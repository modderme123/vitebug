import {defineConfig} from "vite";
export default defineConfig({
  build: {
    lib: {
      entry: "step1/a.js",
      name: "mylib",
      formats: ['es'],
    },
    outDir: "lib",
    minify: false,
    rollupOptions: {
      output: {
        dir: 'lib',
        format: 'es',
        entryFileNames: undefined,
      },
    }
  },
});
