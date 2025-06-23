import vue from "@vitejs/plugin-vue";
import md from "unplugin-vue-markdown/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [
    vike(),
    vercel(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],
  server: {
    port: 3333,
  },
  build: {
    target: "es2022",
  },
  // 自定义别名
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
