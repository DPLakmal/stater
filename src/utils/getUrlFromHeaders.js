import { headers } from "next/headers";

const getUrlFromHeaders = async (page = "") => {
  const headersList = await headers();

  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const pageWithSlash = page.startsWith("/") ? page : `/${page}`;

  return `${protocol}://${host}${pageWithSlash}`;
};

export default getUrlFromHeaders;
