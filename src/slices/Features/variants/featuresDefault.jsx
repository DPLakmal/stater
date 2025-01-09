import StyledContainer from "@/components/StyledContainer";
import { StyledPrismicRichText } from "@/components/StyledPrismicRichText";
import StyledPrismicRichTextSingle from "@/components/StyledPrismicRichTextSingle";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

const FeaturesDefault = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center">
        <div className="max-w-[520px] w-full">
          <div className="text-center xl:text-start xl:mb-[40px]">
            <StyledPrismicRichTextSingle
              field={slice.primary.feature_subtitle}
              className="text-title-base text-[#1774E0] "
            />
            <div className="mt-[10px] mb-[10px] md:mt-[20px]">
              <StyledPrismicRichTextSingle
                field={slice.primary.feature_title}
                className="text-title-x-large font-medium"
              />
            </div>
            <StyledPrismicRichText
              field={slice.primary.feature_description}
              className="text-body-p3 text-[#24282E]"
            />
          </div>

          {slice.primary.features.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-start mt-[20px] md:justify-center xl:justify-start mr-[30px]"
            >
              <PrismicNextImage
                field={item.feature_image}
                fallbackAlt=""
                className="max-w-[60px] max-h-[60px] mr-[20px] bg-[#F9F9F9] p-[10px] rounded-[10px] "
              />
              <div className="flex flex-col">
                <StyledPrismicRichTextSingle
                  field={item.feature_title}
                  className="text-title-base font-semibold text-[#383737]"
                />
                <StyledPrismicRichText
                  field={item.feature_description}
                  className="text-body-p3 text-[#24282E]"
                />
              </div>
            </div>
          ))}
        </div>

        <PrismicNextImage
          fallbackAlt=""
          field={slice.primary.feature_main_image}
          className="rounded-[10px] mt-[30px] xl:max-w-[542px] xl:max-h-[468px] xl:mt-0 xl:ml-[42px]"
        />
      </div>
    </StyledContainer>
  );
};

export default FeaturesDefault;
