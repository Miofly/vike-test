// https://vike.dev/onRenderClient
export default onRenderClient;

import type { PageContext } from "vike/types";
import { createApp } from "../app";

async function onRenderClient(pageContext: PageContext) {
  const { Page } = pageContext;
  const { app, router } = createApp({ Page });
  await router.isReady();
  app.mount("#app");
}
