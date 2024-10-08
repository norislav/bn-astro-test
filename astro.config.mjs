import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://norislav.github.io",
  base: "bn-astro-test",
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
