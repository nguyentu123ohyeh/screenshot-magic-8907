import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Custom domain: https://hyperfashionbase.com
    // Assets are served from the domain root.
    base: "/",
  },

  tanstackStart: {
    spa: {
      enabled: true,
    },
    server: {
      entry: "server",
    },
  },
});
