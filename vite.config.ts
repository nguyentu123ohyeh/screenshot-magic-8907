// GitHub Pages-ready config for this TanStack Start/Lovable project.
// Local dev stays at "/", while GitHub Actions automatically uses "/<repo-name>/".
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase =
  process.env.GITHUB_ACTIONS === "true" && repoName
    ? `/${repoName}/`
    : "/";

export default defineConfig({
  vite: {
    base: githubPagesBase,
  },

  tanstackStart: {
    // GitHub Pages is static hosting, so build a client-side SPA shell.
    spa: {
      enabled: true,
    },

    // Keep the project's existing TanStack Start server entry for build-time rendering.
    server: {
      entry: "server",
    },
  },
});
