import React from "react";
import { PrismicNextLink } from "@prismicio/next";

const CopyrightLinks = ({ links }) => {
  if (!links || !links?.length) return null;

  return (
    <ul
      className={
        "ms-2 flex flex-col gap-y-[6px] md:gap-y-0  md:flex-row md:gap-x-[30px]"
      }
    >
      {links.map(({ link, label }, index) => (
        <li key={index}>
          <PrismicNextLink field={link}>{label}</PrismicNextLink>
        </li>
      ))}
    </ul>
  );
};

export default CopyrightLinks;
