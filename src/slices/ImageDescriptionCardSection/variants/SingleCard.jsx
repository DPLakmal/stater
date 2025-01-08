import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

export default function SingleCard({ slice }) {
  return (
    <StyledContainer slice={slice}>
      <div
        className={clsx({
          "mx-auto max-w-[550px] md:max-w-[600px] lg:max-w-none": true,
          "lg:flex lg:flex-nowrap lg:items-center lg:gap-[38px] lg:justify-center": true,
          "lg:flex-row": slice.primary.right_aligned_image,
          "lg:flex-row-reverse": !slice.primary.right_aligned_image,
        })}
      >
        <div className="mb-[24px] w-full lg:max-w-[612px]">
          {slice.primary.title && (
            <StyledPrismicRichTextSingle
              field={slice.primary.title}
              className={
                "text-title-x-large text-center lg:text-start mb-[14px]"
              }
            />
          )}
          {slice.primary.description && (
            <StyledPrismicRichTextSingle
              field={slice.primary.description}
              className={"text-body-small text-center text-[#232323] lg:text-start"}
            />
          )}
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          fallbackAlt=""
          className="rounded-[8px] w-full object-cover lg:max-w-[414px] xl:min-w-[414px]"
        />
      </div>
    </StyledContainer>
  );
}
