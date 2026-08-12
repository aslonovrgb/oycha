import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders the complete Jimo product experience", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();

  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /Jimo Matcha — Premium Kagoshima Matcha/i);
  assert.match(html, /Meet the pack/i);
  assert.match(html, /jimo-hero-four-flavours-square-v2\.webp/i);
  assert.match(html, /jimo-four-flavours-wide-v2\.webp/i);
  assert.match(html, /jimo-pouch-yuzu-matcha-card-v3\.webp/i);
  assert.match(html, /One size · 250 ml/i);
  assert.match(html, /RM16/i);
  assert.doesNotMatch(html, /500ml|RM15|RM28/i);
});
