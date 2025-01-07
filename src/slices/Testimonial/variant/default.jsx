import StyledButton from "@/components/StyledButton";
import StyledContainer from "@/components/StyledContainer";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import React from "react";
import CarousalDefault from "../components/carousalDefault";

const TestimonialDefault = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="flex flex-col  items-center xl:mx-[88px]">
        <div className="text-center  ">
          <StyledPrismicRichTextSingle
            field={slice?.primary?.subtitle}
            className="text-base text-[#1774E0] font-semibold leading-[19.36px]"
          />
          <div className="mt-[10px] mb-[10px] md:mt-[20px]">
            <StyledPrismicRichTextSingle
              field={slice?.primary?.title}
              className="title-font text-title-x-large font-medium"
            />
          </div>
          <StyledPrismicRichText field={slice?.primary?.description} />

          <div className="flex flex-row justify-center gap-x-[20px] mt-[20px] md:mt-[30px]">
            {slice?.primary?.buttons?.map(
              ({ label, link, icon_name, icon_alignment, variant }, idx) => (
                <StyledButton
                  key={idx}
                  label={label}
                  link={link}
                  icon={icon_name}
                  iconAlignment={icon_alignment}
                  variant={variant?.toLowerCase()}
                  className=" bg-black h-fit"
                />
              ),
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full mt-[30px] md:mt-[40px] xl:mt-[60px]">
          <CarousalDefault slice={slice} />
        </div>
      </div>
    </StyledContainer>
  );
};

export default TestimonialDefault;