import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { imageService } from "@unpic/astro/service";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://norislav.github.io",
  base: "bn-astro-test",
  image: {
    service: imageService({
      placeholder: "blurhash",
      layout: "constrained",
    }),
  },
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
