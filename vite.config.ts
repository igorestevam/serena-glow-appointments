// @lovable.dev/vite-tanstack-config already registers the plugins needed by
// TanStack Start (including Nitro). Do not register them again.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Lovable uses Cloudflare for its own deployment. On Vercel, Nitro must emit
// Vercel-compatible output instead of the default Cloudflare Worker bundle.
const isVercel = Boolean(process.env["VERCEL"]);

export default defineConfig({
  tanstackStart: {
    // Preserve the custom server entry used for SSR error handling.
    server: { entry: "server" },
  },
  ...(isVercel ? { nitro: { preset: "vercel" } } : {}),
});
