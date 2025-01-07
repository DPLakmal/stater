import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import React from "react";
import { ButtonContainer } from "../components";
import { PrismicNextImage } from "@prismicio/next";

const Variant4 = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="grid grid-cols-1  gap-y-[24px] md:gap-y-[30px] xl:gap-y-[50px]  items-center justify-center ">
        <div>
          <StyledPrismicRichTextSingle
            field={slice.primary.subtitle}
            className={"text-base text-primary font-medium  text-center"}
          />

          <StyledPrismicRichTextSingle
            field={slice.primary.title}
            className={
              "text-title-3x-large text-center  mt-[10px] mb-[12px] md:[18px] xl-[20px] xl:[24px]"
            }
          />

          <StyledPrismicRichTextSingle
            field={slice.primary.description}
            className={"text-body-base text-center"}
          />

          <div className="mt-[20px] md:mt-[24px]">
            <ButtonContainer slice={slice} contentCenter={true} />
          </div>
        </div>
        <div className="flex w-fit gap-x-[20px] items-center">
          {slice.primary.hero_images.map((item, idx) => (
            <PrismicNextImage
              key={idx}
              field={item?.image}
              fallbackAlt=""
              className={`${idx === 1 ? "md:w-[375px] md:h-[240px] xl:w-[630px] xl:h-[365px]" : "hidden md:flex md:w-[142px] md:h-[200px]  xl:w-[305px] xl:h-[270px]"} rounded-[10px] md:rounded-[20px]  object-cover  `}
            />
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Variant4;
