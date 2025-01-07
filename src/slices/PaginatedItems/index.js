import StyledContainer from "@/components/StyledContainer";
import StyledPagination from "@/components/StyledPagination";
import Link from "next/link";
import { asLink, asText } from "@prismicio/client";
import { createClient } from "@/prismicio";

export default async function PaginatedItems({ slice, context }) {
  const currentPage = Number(context?.searchParams?.page || 1);

  const type = getType(slice.primary.type);

  if (!type) return null;

  const client = createClient();

  const items = await client.getAllByType(type);

  const itemsPerPage = slice?.primary?.number_of_items_per_page || 10;

  const totalPages = Math.ceil(items?.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StyledContainer slice={slice}>
        <ul className={"grid grid-cols-2 md:grid-cols-3 gap-3"}>
          {items.slice(start, end).map((item) => {
            return (
              <li key={item.id}>
                <Link href={asLink(item)}>
                  <h2>{asText(item.data.title)}</h2>
                </Link>
              </li>
            );
          })}
        </ul>

        <StyledPagination
          totalPageCount={totalPages}
          currentPage={currentPage}
        />
      </StyledContainer>
    </section>
  );
}

const getType = (type) => {
  switch (type) {
    case "Blog":
      return "blog";
    default:
      return "";
  }
};
