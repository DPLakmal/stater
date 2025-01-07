import { createClient } from "@/prismicio";
import { asLink } from "@prismicio/client";
import getUrlFromHeaders from "@/utils/getUrlFromHeaders";

export default async function sitemap() {
  const client = createClient();

  const pages = await client.getAllByType("page");
  const blogs = await client.getAllByType("blog");

  const urls = [];

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    if (page.uid === "home") {
      const url = await getUrlFromHeaders();
      urls.push({
        url,
        lastModified: new Date(page.last_publication_date).toISOString(),
        priority: 1,
      });
      continue;
    }

    const url = await getUrlFromHeaders(asLink(page));
    urls.push({
      url,
      lastModified: new Date(page.last_publication_date).toISOString(),
      priority: 0.8,
    });
  }

  for (let i = 0; i < blogs.length; i++) {
    const page = blogs[i];
    const url = await getUrlFromHeaders(asLink(page));
    urls.push({
      url,
      lastModified: new Date(page.last_publication_date).toISOString(),
      priority: 0.7,
    });
  }

  return urls;
}
