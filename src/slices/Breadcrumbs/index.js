import Link from "next/link";
import * as prismic from "@prismicio/client";
import { headers } from "next/headers";

/**
 * @typedef {import("@prismicio/client").Content.BreadcrumbsSlice} BreadcrumbsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BreadcrumbsSlice>} BreadcrumbsProps
 * @param {BreadcrumbsProps}
 */
const Breadcrumbs = ({ slice, context }) => {
  const { links, schema } = generateLinks(context);

  if (!links || !links.length) return null;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {schema}
      <ol>
        {links.map(({ link, label }, idx) => (
          <li key={idx}>
            <Link href={link}>{label}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Breadcrumbs;

const generateLinks = async (data) => {
  const headersList = await headers();

  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto");

  const { page } = data;
  const links = [{ label: "Home", link: "/" }];

  links.push(...generateMiddleLinks(page));

  links.push({ label: prismic.asText(page.data.title), link: page.url });

  const s = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: links.map((item, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${protocol}://${host}${item.link}`,
      };
    }),
  };

  const schema = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(s),
      }}
    />
  );

  return { links, schema };
};

const generateMiddleLinks = (page) => {
  switch (page?.type) {
    case "blog":
      return [{ label: "Blog", link: "/blog" }];
    default:
      return [];
  }
};
