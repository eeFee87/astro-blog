import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro alumno | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: 'https://superlative-crumble-be6d55.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`
  });
}
