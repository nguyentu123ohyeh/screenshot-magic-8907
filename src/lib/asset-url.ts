/**
 * Build a public-asset URL that works both locally and under a GitHub Pages
 * repository subpath.
 *
 * Example:
 *   assetUrl("images/index.png")
 */
export function assetUrl(path: string) {
  const cleanPath = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
