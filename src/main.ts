import { createPinia } from 'pinia';
import { createSSRApp } from "vue";
import { createRouter } from "./routes";

export { createApp };

function createApp({ Page }: { Page: unknown }) {
  const app = createSSRApp(Page as any);
  const router = createRouter();
  app.use(router);

  const store = createPinia()
  app.use(store)

  return { app, router, store };
}
