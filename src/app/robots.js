import getUrlFromHeaders from "@/utils/getUrlFromHeaders";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: getUrlFromHeaders("/sitemap.xml"),
  };
}
