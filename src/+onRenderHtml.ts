// https://vike.dev/onRenderHtml
export default onRenderHtml;

import { renderToString } from "@vue/server-renderer";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import type { PageContext } from "vike/types";
import { createApp } from "./main";

async function onRenderHtml(pageContext: PageContext) {
  const { Page } = pageContext;
  const { app, router } = createApp({ Page });

  // set the router to the desired URL before rendering
  router.push(pageContext.urlPathname);
  await router.isReady();

  const appHtml = await renderToString(app);

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
