import React from "react";
import StyledContainer from "@/components/StyledContainer";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import StyledButton from "@/components/StyledButton";

const CtaFullwidth = ({ slice, third = false }) => {
  const { cta_title, cta_description, buttons = [] } = slice.primary || {};
  return (
    <StyledContainer slice={slice} parentClass={"bg-primary"} paddingX={false}>
      <div className="flex justify-center items-center py-[80px]">
        <div className="bg-primary text-center">
          {cta_title && (
            <div className="mb-[20px]">
              <StyledPrismicRichTextSingle
                field={cta_title}
                className=" title-font text-title-x-large font-medium !text-white md:text-[32px] lg:text-[48px] md:whitespace-nowrap"
              />
            </div>
          )}
          {third && <span>Hello</span>}
          {cta_description && (
            <div className="mb-[50px] leading-[22px]">
              <StyledPrismicRichTextSingle
                field={cta_description}
                className="text-base font-semibold leading-[19.36px] text-white"
              />
            </div>
          )}
          <div className="flex justify-center gap-4">
            {buttons?.map((item, index) => (
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

export default CtaFullwidth;
