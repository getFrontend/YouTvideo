import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        favourite: 'favourite.html',
        video: 'video.html',
        search: 'search.html'
      }
    }
  },
  publicDir: './public',
});	