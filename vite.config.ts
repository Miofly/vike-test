import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import vercel from "vite-plugin-vercel";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike(),
    vercel(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],
  build: {
    target: "es2022",
  },
});
