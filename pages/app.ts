import { createSSRApp } from "vue";
import { createRouter } from "./router";

export { createApp };

function createApp({ Page }: { Page: unknown }) {
  const app = createSSRApp(Page as any);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
