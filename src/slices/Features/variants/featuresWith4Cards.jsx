import StyledButton from "@/components/StyledButton";
import StyledContainer from "@/components/StyledContainer";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const FeaturesWith4Cards = ({ slice }) => {
  return (
    <StyledContainer slice={slice} className="bg-[#F5F7FA]">
      <div className="flex flex-col  xl:items-center xl:justify-between">
        <div className="text-center  ">
          <StyledPrismicRichTextSingle
            field={slice.primary.feature_subtitle}
            className="text-base text-[#1774E0] font-semibold leading-[19.36px]"
          />
          <div className="mt-[10px] mb-[10px] md:mt-[20px]">
            <StyledPrismicRichTextSingle
              field={slice.primary.feature_title}
              className="title-font text-title-x-large font-medium"
            />
          </div>
          <StyledPrismicRichText field={slice.primary.feature_description} />

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
                  className="h-fit"
                />
              ),
            )}
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-1 gap-y-[20px] md:grid-cols-2 md:gap-[20px] md:mx-[30px] w-full xl:grid-cols-4">
          {slice.primary.features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white px-[10px] py-[20px] gap-y-[20px] w-full max-w-[305px]"
            >
              <PrismicNextImage
                fallbackAlt=""
                field={item.feature_image}
                className="max-w-[60px] max-h-[60px]  p-[10px]  "
              />
              <div className="flex flex-col">
                <div className="text-body-large mb-[10px]">
                  <StyledPrismicRichTextSingle field={item.feature_title} />
                </div>
                <StyledPrismicRichText field={item.feature_description} />
              </div>
              <StyledButton
                label={item?.button_title}
                link={item?.button_link}
                icon={item?.icon_name}
                iconAlignment={item?.icon_alignment}
                variant={item?.variant?.toLowerCase()}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default FeaturesWith4Cards;
