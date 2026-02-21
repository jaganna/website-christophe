import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://christophe-bach.fr",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "pl"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
