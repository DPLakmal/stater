import React from "react";
import StyledButton from "@/components/StyledButton"; // Import StyledButton component
import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";

const CtaDefault = ({ slice }) => {
  const { cta_title, cta_description, buttons = [] } = slice.primary || {};

  return (
    <StyledContainer slice={slice}>
      <div className="flex justify-center items-center bg-white py-[80px]">
        <div className="bg-dark-blue shadow-lg text-center lg:h-auto lg:w-[1063px] rounded-[20px] gap-[50px] p-[40px] px-[20px] sm:px-[20px] sm:p-[40px] md:px-[68px] md:p-[60px] lg:px-[149px] lg:p-[80px] md:w-[688px] md:h[336px]">
          {cta_title && (
            <div className="mb-[20px]">
              <StyledPrismicRichTextSingle
                field={cta_title}
                className=" title-font text-title-x-large font-medium !text-white md:text-[32px] lg:text-[48px] md:whitespace-nowrap"
              />
            </div>
          )}
          {cta_description && (
            <div className="mb-[50px] leading-[22px]">
              <StyledPrismicRichTextSingle
                field={cta_description}
                className="text-base font-semibold leading-[19.36px] text-white"
              />
            </div>
          )}
          <div className="flex justify-center gap-4">
            {buttons.map((item, index) => (
              <StyledButton
                key={index}
                label={item.label}
                link={item.link}
                variant={item.variant || "Primary"}
                icon={item.icon_name}
                iconAlignment={item.icon_alignment || "left"}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CtaDefault;
