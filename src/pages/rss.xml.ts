import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { site, projects } from "../data/site";

export const GET: APIRoute = async (context) => {
  return rss({
    title: `${site.name} - ${site.role}`,
    description: site.bio,
    site: context.site ?? "https://rohitverma.dev",
    items: projects.map((p) => ({
      title: p.title,
      description: p.description,
      link: p.live,
      pubDate: new Date(),
    })),
  });
};
