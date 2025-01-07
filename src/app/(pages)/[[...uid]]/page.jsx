import { notFound } from "next/navigation";
import { asLink, asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(props) {
  const params = await props.params;
  // const searchParams = await props.searchParams;

  const uid = params?.uid?.length
    ? params?.uid[params?.uid?.length - 1]
    : "home";
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());
  const settings = await client.getSingle("settings");

  return {
    title:
      page.data.meta_title ||
      settings?.data.meta_title ||
      asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title:
        page.data.og_title || page.data.meta_title || settings.data.meta_title,
      description: page.data.og_description || page.data.meta_description,
      url: page.data.og_url,
      images: [
        {
          url: page.data.og_image?.url,
        },
      ],
    },
  };
}

/**
 * @param {{ params: Params }}
 */
export default async function Page(props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const uid = params?.uid?.length
    ? params?.uid[params?.uid?.length - 1]
    : "home";
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  const settings = await client.getSingle("settings");

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ page, searchParams, settings }}
    />
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: asLink(page).split("/").filter(Boolean) };
  });
}
