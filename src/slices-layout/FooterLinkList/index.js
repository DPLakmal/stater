import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.FooterLinkListSlice} FooterLinkListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterLinkListSlice>} FooterLinkListProps
 * @param {FooterLinkListProps}
 */
const FooterLinkList = ({ slice }) => {
  if (!slice) return null;
  return (
    <div>
      <h5 className="title-font text-title-base font-medium mb-[30px]">
        {slice.primary.title}
      </h5>
      <ul className=" flex flex-col gap-[14px]">
        {slice.primary.links.map((item, idx) => (
          <li key={idx}>
            <PrismicNextLink field={item.link} className="text-body-base">
              {item.label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
